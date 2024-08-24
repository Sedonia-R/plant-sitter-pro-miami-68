from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime, timezone
from geopy.geocoders import Nominatim
from geopy.exc import GeocoderTimedOut, GeocoderQuotaExceeded

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)  # Phone number stored here
    password_hash = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return f'<User {self.email}>'

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def generate_token(self):
        return create_access_token(identity=self.id)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "phone": self.phone,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }

class ClientProfiles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    address_line_1 = db.Column(db.String(255), nullable=True)
    address_line_2 = db.Column(db.String(255), nullable=True)
    city = db.Column(db.String(100), nullable=True)
    country = db.Column(db.String(50), default='United States')
    my_plants = db.Column(JSONB, nullable=True)
    service_preferences = db.Column(JSONB, nullable=True)
    zip_code = db.Column(db.String(10), nullable=True)
    location = db.Column(db.String(255), nullable=True)  # Address from geolocation
    latitude = db.Column(db.Float, nullable=True)  # Latitude for geolocation
    longitude = db.Column(db.Float, nullable=True)  # Longitude for geolocation
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    user = db.relationship('User', backref=db.backref('client_profiles', lazy=True))

    def __repr__(self):
        return f'<ClientProfile {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "address_line_1": self.address_line_1,
            "address_line_2": self.address_line_2,
            "city": self.city,
            "zip_code": self.zip_code,
            "country": self.country,
            "location": self.location,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "my_plants": self.my_plants,
            "service_preferences": self.service_preferences,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }

    def set_location_by_zip(self, zip_code):
        geolocator = Nominatim(user_agent="Plant_Sitter_Pro")
        try:
            location = geolocator.geocode(zip_code, country_codes='US')
            if location:
                self.zip_code = zip_code
                self.location = location.address
                self.latitude = location.latitude
                self.longitude = location.longitude
            else:
                raise ValueError("Could not find location for the provided zip code.")
        except (GeocoderTimedOut, GeocoderQuotaExceeded) as e:
            raise ValueError("Error occurred during geocoding request.") from e

class PlantSitter(db.Model):
    __tablename__ = 'plant_sitters'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    profile_picture_url = db.Column(db.String(255), nullable=True)
    address_line_1 = db.Column(db.String(255), nullable=True)
    address_line_2 = db.Column(db.String(255), nullable=True)
    city = db.Column(db.String(100), nullable=True)
    country = db.Column(db.String(50), default='United States')
    zip_code = db.Column(db.String(10), nullable=True)
    location = db.Column(db.String(255), nullable=True)  # Address from geolocation
    latitude = db.Column(db.Float, nullable=True)  # Latitude for geolocation
    longitude = db.Column(db.Float, nullable=True)  # Longitude for geolocation
    bio = db.Column(db.Text, nullable=True)
    professional_experience = db.Column(db.Text, nullable=True)
    additional_info = db.Column(db.Text, nullable=True)
    prefered_plants = db.Column(JSONB, nullable=True)  # List of plant types
    service_preferences = db.Column(JSONB, nullable=True)  # Preferences on service
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    user = db.relationship('User', backref=db.backref('plant_sitters', lazy=True))

    def __repr__(self):
        return f'<PlantSitter {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "profile_picture_url": self.profile_picture_url,
            "address_line_1": self.address_line_1,
            "address_line_2": self.address_line_2,
            "city": self.city,
            "zip_code": self.zip_code,
            "country": self.country,
            "location": self.location,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "bio": self.bio,
            "professional_experience": self.professional_experience,
            "additional_info": self.additional_info,
            "prefered_plants": self.prefered_plants,
            "service_preferences": self.service_preferences,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat()
        }

    def set_location_by_zip(self, zip_code):
        geolocator = Nominatim(user_agent="Plant_Sitter_Pro")
        try:
            location = geolocator.geocode(zip_code, country_codes='US')
            if location:
                self.zip_code = zip_code
                self.location = location.address
                self.latitude = location.latitude
                self.longitude = location.longitude
            else:
                raise ValueError("Could not find location for the provided zip code.")
        except (GeocoderTimedOut, GeocoderQuotaExceeded) as e:
            raise ValueError("Error occurred during geocoding request.") from e

# class JobPost(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    title = db.Column(db.String(200), nullable=False)
#    details = db.Column(db.String(200), nullable=False)
#    start_date = db.Column(db.DateTime, nullable=False)
#    end_date = db.Column(db.DateTime, nullable=False)
#    rate = db.Column(db.Integer, nullable=False)
#    address = db.Column(db.String(200), nullable=False)
# #    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#    client_profiles_id = db.Column(db.Integer, db.ForeignKey('client_profiles.id'), nullable=False)
#    status = db.Column(db.String(50), default='open', nullable=False)
#    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
#    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

# #    user = db.relationship('User', backref=db.backref('job_posts', lazy=True))
#    client_profiles = db.relationship('ClientProfiles', back_populates='job_posts')

#    def __repr__(self):
#        return f'<JobPost {self.title} by PlantSitter {self.plant_sitter_id}>'

#    def serialize(self):
#        return {
#            "id": self.id,
#            "title": self.title,
#            "details": self.details,
#            "start_date": self.start_date,
#            "end_date": self.end_date,
#            "rate": self.rate,
#            "address": self.address,
#         #    "user_id": self.user_id,
#            "client_profiles_id": self.plant_sitter_id,
#            "status": self.status,
#            "created_at": self.created_at,
#            "updated_at": self.updated_at
#        }