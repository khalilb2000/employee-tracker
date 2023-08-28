# employee-tracker
# Employee Tracker

Manage departments, roles, and employees in your company with this command-line application.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [Technologies](#technologies)
- [License](#license)

## Description

The Employee Tracker is a command-line application that allows business owners to organize and plan their company by viewing and managing departments, roles, and employees. Users can interact with the application through a menu system that provides options to view existing data, add new data, and exit the application.

## Installation

1. Clone this repository to your local machine using the following command:


2. Navigate to the project directory:


3. Install the required npm packages:


## Usage

1. Make sure you have a MySQL server installed and running.

2. Update the `db.js` file with your MySQL connection details.

3. Create the database schema by following the instructions in the [Database Setup](#database-setup) section.

4. Run the application:


5. Follow the prompts to navigate through the application's menu and perform various actions.

6. When you're done, select the "Exit" option to close the application.

## Database Setup

Before running the application, you need to set up the database schema. Follow these steps:

1. Access your MySQL server.

2. Create a database named `employee_db`.

3. Use the `employee_db` database:


4. Create the necessary tables by running the SQL statements provided in the `app.js` file.

5. Optionally, you can insert sample data using the `INSERT INTO` statements provided in the `app.js` file.

## Technologies

- Node.js
- MySQL
- Inquirer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
