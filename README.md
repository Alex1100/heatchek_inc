
# Employee Application Must Have
- [X] Create Employee DB Tables
- [X] Create Employee Authentication with Roles for ADMIN_EMPLOYEE and STANDARD_EMPLOYEE
- [X] Create basic auth flow for employee portal
- Basic Landing Page to find and schedule more jobs
- [X] Migrate from Heroku to AWS EC2 to make sure the app serves via https with it's existing ssl credentials
- [X] Must create a subscription to all new events from calendly via a webhook.
- [X] add Events / Jobs DB Tables to be able to auto populate and remove based off subscription events from the Calendly Webhook
- [] Create a way to View and Schedule jobs via Calendly integration
- Need to be able to complete / mark jobs as completed, ignored, or cancelled
- Component to view job details aka (location of house, square footage, expected earnings, etc...)
- [] Find out how to create a subscription without using curl (curl --header "X-TOKEN: MFBIGFLBNVCV52OYXH72ZSJINHUNZXFB" --data "url=https://heatchek-inc.herokuapp.com/api/add-event&events[]=invitee.created" https://calendly.com/api/v1/hooks)
- [] Write a bash script to create a subscription via curl on an EC2 Amazon Linux instance AMI
- [] Ensure a proper Webhook subscription is created and works based off new signaled events (since it doesn't work on localhost)


# Employee Application Nice to Have
- [] Notify when an employee has arrived at the job site, to have the system send an automated phone call or text message to the broker/owner
- [] Landing Page with current scheduled jobs, and other relevant information, monthly earnings to date, pay-day date, link to completed jobs


# Client Application Must Have
- [X] Create a calendar event for each type of transaction on Calendly
-  [X] One for each range of square footage <= 2000, <= 3500, <= 5999
- [X] Also for each size variant, we must also add in the potential charges for each combination of services: with drone pictures, with drone videos, with drone pictures and videos, with 2d floor plan, with 3d and 2d floor plan, with 3d floor plan, etc...
- [X] <= 2000 sqft
  1. with drone pictures
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  2. with drone videos
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  3. with drone pictures and videos
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  4. FUTURE DEVELOPMENTS with only 2d floor plans
  5. FUTURE DEVELOPMENTS with only 3d floor plans
  6. FUTURE DEVELOPMENTS with only both 2d/3d floor plans
- [X] <= 3500 sqft
  1. with drone pictures
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  2. with drone videos
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  3. with drone pictures and videos
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  4. FUTURE DEVELOPMENTS with only 2d floor plans
  5. FUTURE DEVELOPMENTS with only 3d floor plans
  6. FUTURE DEVELOPMENTS with only both 2d/3d floor plans
- [X] <= 5999 sqft
  1. with drone pictures
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  2. with drone videos
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  3. with drone pictures and videos
    - FUTURE DEVELOPMENTS
    - and with 2d floor plans
    - and with 3d floor plans
    - and with both 2d and 3d floor plans
  4. FUTURE DEVELOPMENTS with only 2d floor plans
  5. FUTURE DEVELOPMENTS with only 3d floor plans
  6. FUTURE DEVELOPMENTS with only both 2d/3d floor plans
- [X] Create a calendar component to schedule something minimum one week in the future to have a field specialist
- [X] Payment info via stripe
- [] 45 different event varieties
- [X] Create Client DB Tables (Include Brokerage information)
- [X] Text based authentication to avoid users from remebering passwords and username/emails
- [] Create Client Listing Tables
- [] Create Properties Table
- [] Create Embedded Signing Ceremony experience with docusign node client
- [] Query docusign after redirect uri is hit to verify if a signature has been provided
 come out and service the property
- [] Need a contact page
- [] Basic Landing Page with Company info in footer
- [] Schedule with us on top nav
- [] Need to be able to complete / mark jobs as completed, ignored, or cancelled
- [] Component to view job details aka (location of house, square footage, expected earnings, etc...)
- [] Basic Landing Page to find and schedule more jobs
- [] Auth to allow customers to activate and deactivate prior listing tour links at will
