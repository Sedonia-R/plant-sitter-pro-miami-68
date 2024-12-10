
import click
from api.models import db, User

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with your database, for example: Import the price of bitcoin every night at 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of our command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass

    # @app.cli.command("insert-example-users") # name of our command
    # @click.argument("count") # use 9
    # def insert_example_users(count):
    #     print("Creating example users")
    #     for x in range(1, int(count) + 1):
    #         user = User()
    #         user.id = str(x)
    #         user.first_name = "test_user_first" + str(x)
    #         user.last_name = "test_user_last" + str(x)
    #         user.email = "test_user" + str(x) + "@test.com"
    #         user.phone = '101102300' + str(x) #max 9 users
    #         user.password_hash = "123456"
    #         user.address_line_1 = ""
    #         user.address_line_2 = ""
    #         user.city = 'Gainesville'
    #         user.state = 'Florida'
    #         user.country = 'United States'
    #         user.zip_code = int(32608)
    #         user.location = ""
    #         user.latitude = ""
    #         user.longitude = ""
    #         user.created_at = ""
    #         user.updated_at = ""
    #         user.is_verified = True
    #         db.session.add(user)
    #         db.session.commit()
    #         print("User: ", user.first_name, " created.")
        
    #     print("All example users created")
