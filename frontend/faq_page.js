angular.module('faqApp', [])
.controller('FaqController', ['$scope', function ($scope) {
    $scope.tabs = [
        { label: 'General', target: 'general' },
        { label: 'Projects', target: 'projects' },
        { label: 'ATS', target: 'ats' },
        { label: 'Finance', target: 'finance' },
        { label: 'Timesheet', target: 'timesheet' },
        { label: 'CRM', target: 'crm' },
        { label: 'HR', target: 'hr' }
    ];
    
    $scope.activeTab = 'general'; // Default active tab
    $scope.currentCategory = 'general'; // Default category
    $scope.currentPage = 1; // Default page
    $scope.itemsPerPage = 8; // Items per page
    $scope.selectedFAQs = []; // FAQs to display on the current page
    $scope.paginationButtons = []; // Pagination button numbers
    $scope.searchResults = []; // Search results for FAQs
    $scope.noResultsFound = false; // Flag for no results in search
    $scope.openResults = false;

    $scope.faqData = {
        "general": [
                        
{ question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", open: false },
{ question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", open: false },
{ question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", open: false },
{ question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", open: false },
{ question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", open: false },
{ question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", open: false },
{ question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", open: false },
{ question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", open: false },
{ question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", open: false },
{ question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", open: false },
{ question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", open: false },
{ question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", open: false },
{ question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", open: false },
{ question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", open: false },
{ question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", open: false },
{ question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", open: false },
{ question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", open: false },
{ question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", open: false },
{ question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", open: false },
{ question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", open: false },
{ question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", open: false },
{ question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", open: false },
{ question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", open: false },
{ question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", open: false },
{ question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", open: false },
{ question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", open: false },
{ question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", open: false },
{ question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", open: false },
{ question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", open: false },
{ question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", open: false },
 
{ "question": "How do I post a job opening?", "answer": "Go to the ATS module, click on 'Post Job', and fill out the job details.", "open": false },
{ "question": "How can I view applicants?", "answer": "Navigate to the 'Applicants' section in the ATS module to view all the applicants.", "open": false },
{ "question": "How do I track candidate applications?", "answer": "Candidate tracking is available in the ATS dashboard.", "open": false },
{ "question": "What is the interview feedback system?", "answer": "The feedback system allows evaluators to rate candidates.", "open": false },
{ "question": "How do I add new job postings?", "answer": "Go to the 'Job Postings' section and click 'Add New'.", "open": false },
{ "question": "Can I set up automated email responses?", "answer": "Yes, email responses can be automated in ATS settings.", "open": false },
{ "question": "How do I integrate ATS with other tools?", "answer": "Integration options are available in the settings.", "open": false },
{ "question": "What analytics are available in ATS?", "answer": "Analytics include candidate pipeline, time to hire, and more.", "open": false },
{ "question": "How do I delete a candidate profile?", "answer": "Use the 'Delete' option in the candidate profile page.", "open": false },
{ "question": "Can I share job postings externally?", "answer": "Yes, job postings can be shared via public links.", "open": false },
{ "question": "How can I schedule interviews?", "answer": "Interviews can be scheduled from the candidate profile page.", "open": false },
{ "question": "How do I tag candidates with specific skills?", "answer": "Use the tagging feature available in the candidate profile.", "open": false },
{ "question": "What does the Candidate Match Score mean?", "answer": "It indicates how well a candidate's profile matches the job requirements.", "open": false },
{ "question": "Can I assign team members to review candidates?", "answer": "Yes, team members can be assigned through the review section.", "open": false },
{ "question": "How do I update a candidate's status?", "answer": "Use the status dropdown in the candidate's profile to update their application stage.", "open": false },
{ "question": "How do I filter candidates by location?", "answer": "Use the filters section in the 'Applicants' tab to refine candidates by location.", "open": false },
{ "question": "Can external recruiters access the ATS?", "answer": "Yes, recruiters can access the ATS via assigned roles.", "open": false },
{ "question": "How do I set approval workflows for job requisitions?", "answer": "Approval workflows can be configured in the 'Job Requisition' settings.", "open": false },
{ "question": "What types of reports are available in ATS?", "answer": "Reports include hiring velocity, candidate source analysis, and rejection reasons.", "open": false },
{ "question": "Can I integrate video conferencing tools for interviews?", "answer": "Yes, integrations for tools like Zoom or Teams are available in the settings.", "open": false },
{ "question": "How do I notify candidates of interview schedules?", "answer": "Notifications can be sent via the ATS email automation feature.", "open": false },
{ "question": "Can I duplicate an existing job posting?", "answer": "Yes, job postings can be duplicated via the 'Job Details' page.", "open": false },
{ "question": "How do I view candidate pipelines for active job openings?", "answer": "Candidate pipelines are available on the ATS dashboard under 'Active Job Openings'.", "open": false },
{ "question": "How can I filter job postings by status?", "answer": "Use the status filter in the 'Job Postings' section to refine results.", "open": false },
{ "question": "How do I manage internal referrals in ATS?", "answer": "Referrals can be tracked in the 'Referrals' section under 'Applicants'.", "open": false },
{ "question": "What is the Candidate Pipeline view?", "answer": "It opens candidates at each stage of the recruitment process.", "open": false },
{ "question": "Can I attach additional documents to a candidate profile?", "answer": "Yes, additional documents can be uploaded to the candidate profile under 'Attachments'.", "open": false },
{ "question": "How do I search for specific candidates in the database?", "answer": "Use the global search bar in the ATS module to find candidates by name or keyword.", "open": false },
{ "question": "What happens to duplicate candidate profiles?", "answer": "Duplicate profiles are flagged, and users can choose to merge or delete them.", "open": false },
{ "question": "How do I track time-to-hire metrics?", "answer": "Time-to-hire metrics are available in the ATS analytics dashboard.", "open": false },
{ "question": "Can I customize the ATS dashboard?", "answer": "Yes, widgets and reports on the dashboard can be customized.", "open": false },
{ "question": "How do I enable automated reminders for interviews?", "answer": "Set up reminders in the 'Interview Scheduler' section of the ATS module.", "open": false },
{ "question": "What is the role of job requisition templates?", "answer": "Templates simplify the creation of new job postings by predefining roles, descriptions, and criteria.", "open": false },
{ "question": "How do I reject a candidate and send feedback?", "answer": "Use the 'Reject' option in the candidate profile, and select a feedback template for automated communication.", "open": false },
{ "question": "Can I restrict access to certain job postings?", "answer": "Yes, access restrictions can be set based on roles and permissions.", "open": false },
{ "question": "How do I update job posting details?", "answer": "Go to the 'Job Postings' section, select the job, and edit its details.", "open": false },
{ "question": "How can I view rejected candidates?", "answer": "Rejected candidates can be found in the 'Rejected' tab under 'Applicants'.", "open": false },
{ "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
{ "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
{ "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
{ "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },
{ "question": "What is the role of job requisition templates?", "answer": "Templates simplify the creation of new job postings by predefining roles, descriptions, and criteria.", "open": false },
{ "question": "How do I reject a candidate and send feedback?", "answer": "Use the 'Reject' option in the candidate profile, and select a feedback template for automated communication.", "open": false },
{ "question": "Can I restrict access to certain job postings?", "answer": "Yes, access restrictions can be set based on roles and permissions.", "open": false },
{ "question": "How do I update job posting details?", "answer": "Go to the 'Job Postings' section, select the job, and edit its details.", "open": false },
{ "question": "How can I view rejected candidates?", "answer": "Rejected candidates can be found in the 'Rejected' tab under 'Applicants'.", "open": false },
{ "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
{ "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
{ "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
{ "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },
{ "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
{ "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
{ "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
{ "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },
{ "question": "What is the role of job requisition templates?", "answer": "Templates simplify the creation of new job postings by predefining roles, descriptions, and criteria.", "open": false },
{ "question": "How do I reject a candidate and send feedback?", "answer": "Use the 'Reject' option in the candidate profile, and select a feedback template for automated communication.", "open": false },
{ "question": "Can I restrict access to certain job postings?", "answer": "Yes, access restrictions can be set based on roles and permissions.", "open": false },
{ "question": "How do I update job posting details?", "answer": "Go to the 'Job Postings' section, select the job, and edit its details.", "open": false },
{ "question": "How can I view rejected candidates?", "answer": "Rejected candidates can be found in the 'Rejected' tab under 'Applicants'.", "open": false },
{ "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
{ "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
{ "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
{ "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },

{ "question": "What is the leave policy?", "answer": "The leave policy includes details on annual leave, sick leave, and other entitlements.", "open": false },
{ "question": "How do I submit a leave request?", "answer": "Use the 'Submit Leave Request' option in the HR module.", "open": false },
{ "question": "Can I track my leave balance?", "answer": "Yes, leave balance is visible in the HR dashboard under 'Leave Management'.", "open": false },
{ "question": "What is the onboarding process?", "answer": "The onboarding process includes document submission, orientation sessions, and task assignments.", "open": false },
{ "question": "How do I update my personal information?", "answer": "Go to the HR module, select 'Profile Management', and edit your personal details.", "open": false },
{ "question": "What is the grievance redressal process?", "answer": "Grievances can be reported through the HR portal's 'Grievance' section for resolution.", "open": false },
{ "question": "How do I access my payslips?", "answer": "Payslips are available under the 'Payroll' section of the HR module.", "open": false },
{ "question": "Can I request training programs?", "answer": "Yes, training requests can be made under the 'Learning & Development' section in HR.", "open": false },
{ "question": "What is the exit process?", "answer": "The exit process involves resignation submission, clearance procedures, and feedback submission.", "open": false },
{ "question": "How do I contact the HR team?", "answer": "The HR team's contact details are listed in the HR portal under 'Contact Us'.", "open": false },
{ "question": "How do I apply for a salary advance?", "answer": "Salary advance requests can be submitted through the 'Payroll Requests' section.", "open": false },
{ "question": "Can I view my attendance records?", "answer": "Yes, attendance records are available in the 'Attendance' section of the HR module.", "open": false },
{ "question": "How do I submit performance feedback?", "answer": "Feedback can be submitted through the 'Performance Review' section in the HR module.", "open": false },
{ "question": "What is the process for internal job applications?", "answer": "Internal job applications can be submitted via the 'Career Opportunities' section in HR.", "open": false },
{ "question": "How do I nominate someone for an award?", "answer": "Nominations can be submitted through the 'Rewards & Recognition' section.", "open": false },
{ "question": "What is the process for relocation assistance?", "answer": "Relocation assistance requests can be submitted under the 'Relocation' section in HR.", "open": false },
{ "question": "Can I view company policies in the HR module?", "answer": "Yes, all company policies are accessible under the 'Policies' section.", "open": false },
{ "question": "How do I submit expense claims?", "answer": "Expense claims can be submitted through the 'Expense Management' section in HR.", "open": false },
{ "question": "What is the process for applying for a promotion?", "answer": "Promotion applications are handled through the 'Career Growth' section in the HR module.", "open": false },
{ "question": "How do I register for corporate events?", "answer": "Corporate event registration is available under the 'Events' section in HR.", "open": false },
{ "question": "What is the procedure for employee transfers?", "answer": "Employee transfers can be requested through the 'Employee Transfers' section in HR.", "open": false },

{ "question": "How can you access the Accounts application?", "answer": "Locate the App Navigation Section, search for the 'Accounts' application, and click to open it. For quick access, you can pin the Accounts app to the navigation bar.", "open": false },
{ "question": "How do you customize the columns visible in Accounts?", "answer": "Use the Customize option to select, deselect, and rearrange columns. Simply drag and drop the desired fields to tailor the table view to match your workflow requirements.", "open": false },
{ "question": "How do filters help in Accounts?", "answer": "Filters allow users to refine data based on specific criteria, such as location, stakeholders, or account status, simplifying navigation and improving access to relevant account records.", "open": false },
{ "question": "How do you update financial details in Accounts?", "answer": "Navigate to the Account Financials section, edit fields like payment terms, tax details, billing currency, or GSTIN, and save the updates for accurate financial record management.", "open": false },
{ "question": "What is the Opportunities Landing Page?", "answer": "The Opportunities Landing Page lists all opportunities. By default, it opens opportunities linked to the logged-in user ('My Opportunities'), but it can also display all opportunities in the system.", "open": false },
{ "question": "What does the Opportunity Audit Log open?", "answer": "The Opportunity Audit Log maintains a detailed history of all changes made to opportunity details, including updates to timelines, stakeholders, and revenue information.", "open": false },
{ "question": "What happens when an Opportunity is closed as Won?", "answer": "Once an Opportunity is closed as Won, the associated Quote becomes locked. This ensures data integrity and prevents further modifications to the approved project cost structure.", "open": false },
{ "question": "What does the GM% field open in Quotes?", "answer": "The GM% (Gross Margin Percentage) indicates profitability, calculated as: GM% = (Total Revenue - Total Cost) / Total Revenue × 100. It helps assess project margins and financial health.", "open": false },
{ "question": "How do you create a Quote?", "answer": "Navigate to the Opportunity module > Quote tab, click Create Quote, then add details like services, positions, rates, and units. Save the quote to initiate project costing and tracking.", "open": false },
{ "question": "What is the Quote Monthly Projection Report?", "answer": "It aggregates active Quote data to display month-wise revenue and effort projections. The report helps track expected revenue, identify trends, and plan resource allocations effectively.", "open": false },
{ "question": "How do you add Opportunity stakeholders?", "answer": "Stakeholders can be added via the 'Stakeholders' tab within the Opportunity details page.", "open": false },
{ "question": "What is the purpose of Parent Opportunities?", "answer": "Parent Opportunities link to smaller dependent opportunities for better tracking and management.", "open": false },
{ "question": "How do you access the Accounts Audit Log?", "answer": "Go to the Accounts section, select an account, and view the 'Audit Log' tab.", "open": false },
{ "question": "Can Quotes be modified after project creation?", "answer": "No, Quotes are locked after project creation, but new positions can still be added.", "open": false },
{ "question": "How do you apply filters in Opportunities?", "answer": "Filters can be applied in the Opportunities dashboard to refine views based on criteria such as stage, stakeholder, and timeline.", "open": false },
{ "question": "What are Exception Widgets?", "answer": "Exception Widgets in the Sales Dashboard highlight anomalies like inactive quotes, overdue opportunities, or mismatched data.", "open": false },

{ "question": "How can I generate financial reports?", "answer": "Navigate to Finance > Reports > Generate Report and select the report type you need.", "open": false },
{ "question": "What payment methods are supported?", "answer": "KEBS supports payment methods such as credit cards, PayPal, and bank transfers.", "open": false },
{ "question": "How do I update billing information?", "answer": "Go to the Billing section in your account settings and update payment or billing details.", "open": false },
{ "question": "What is the refund policy?", "answer": "The refund policy is outlined in the Terms and Conditions section under Finance policies.", "open": false },
{ "question": "Can I set up recurring payments?", "answer": "Yes, recurring payments can be configured in the 'Recurring Payments' section of Finance.", "open": false },
{ "question": "How do I view my invoice history?", "answer": "Go to Finance > Invoices to view the full history of your invoices.", "open": false },
{ "question": "Can I download invoices?", "answer": "Yes, invoices can be downloaded as PDF files from the 'Invoices' section.", "open": false },
{ "question": "What currencies are supported?", "answer": "KEBS supports multiple currencies, including USD, EUR, GBP, and INR.", "open": false },
{ "question": "How do I dispute a charge?", "answer": "To dispute a charge, contact support through the 'Dispute Charge' option in Finance.", "open": false },
{ "question": "Can I add multiple payment methods?", "answer": "Yes, you can add and manage multiple payment methods in the 'Payment Methods' section.", "open": false },
{ "question": "How do I update tax details?", "answer": "Tax details can be updated in the 'Tax Management' section under Finance.", "open": false },
{ "question": "Can I split payments across multiple accounts?", "answer": "Yes, payments can be split using the 'Split Payment' option during checkout.", "open": false },
{ "question": "How do I automate expense approvals?", "answer": "Expense approvals can be automated in the 'Expense Settings' section of Finance.", "open": false },
{ "question": "What financial KPIs are available in Finance?", "answer": "KPIs such as profit margins, expense ratios, and revenue growth metrics are available in the Finance dashboard.", "open": false },
{ "question": "How do I access my organization's budget overview?", "answer": "The budget overview can be found in the 'Budget Management' section.", "open": false },
{ "question": "How do I submit an expense claim?", "answer": "Expense claims can be submitted through the 'Expense Management' section in Finance.", "open": false },
{ "question": "Can I schedule automatic financial report generation?", "answer": "Yes, reports can be scheduled for automatic generation in the 'Report Scheduler' section.", "open": false },
{ "question": "What is the process for reconciling transactions?", "answer": "Transactions can be reconciled through the 'Reconciliation' tab under Finance.", "open": false },
{ "question": "How do I track overdue payments?", "answer": "Overdue payments are displayed in the 'Accounts Receivable' section.", "open": false },
{ "question": "What is the function of the Revenue Tracker?", "answer": "The Revenue Tracker monitors incoming revenue streams and categorizes them for better analysis.", "open": false },
{ "question": "How do I configure late payment penalties?", "answer": "Late payment penalties can be set up in the 'Payment Policies' section.", "open": false },
{ "question": "Can I generate profit and loss statements?", "answer": "Yes, profit and loss statements are available in the 'Reports' section.", "open": false },
{ "question": "How do I categorize expenses?", "answer": "Expenses can be categorized under 'Expense Categories' in the Finance module.", "open": false },
{ "question": "What is the purpose of the Cash Flow Dashboard?", "answer": "The Cash Flow Dashboard tracks inflows and outflows, giving a real-time view of cash availability.", "open": false },
{ "question": "Can I link external bank accounts?", "answer": "Yes, external bank accounts can be linked via the 'Bank Integration' option.", "open": false },
{ "question": "How do I manage payment reminders?", "answer": "Payment reminders can be configured in the 'Reminder Settings' section of Finance.", "open": false },
{ "question": "Can I track vendor payments?", "answer": "Yes, vendor payments can be tracked in the 'Accounts Payable' section.", "open": false },
{ "question": "What is the process for creating purchase orders?", "answer": "Purchase orders can be created in the 'Purchase Order' section by filling in required details and saving them.", "open": false },

{ "question": "How do I submit a timesheet?", "answer": "Go to the Timesheets module, select the relevant project, enter hours worked, and click 'Submit'.", "open": false },
{ "question": "Can I edit a submitted timesheet?", "answer": "Yes, submitted timesheets can be edited until they are approved by a manager.", "open": false },
{ "question": "How do I track my timesheet approvals?", "answer": "Timesheet approvals can be tracked under the 'Approval Status' tab in the Timesheets module.", "open": false },
{ "question": "What happens if my timesheet is rejected?", "answer": "You will receive a notification, and you can edit and resubmit the timesheet for approval.", "open": false },
{ "question": "Can I submit timesheets for multiple projects?", "answer": "Yes, you can submit timesheets for multiple projects by selecting each project separately in the Timesheets module.", "open": false },
{ "question": "How do I record overtime in my timesheet?", "answer": "Overtime can be recorded by selecting the 'Overtime' category and entering the additional hours.", "open": false },
{ "question": "Can I add comments to my timesheet?", "answer": "Yes, comments can be added in the 'Notes' section before submitting the timesheet.", "open": false },
{ "question": "How do I view past timesheets?", "answer": "Past timesheets can be accessed under the 'Timesheet History' section in the Timesheets module.", "open": false },
{ "question": "Can I export my timesheets?", "answer": "Yes, timesheets can be exported as Excel or PDF files using the 'Export' option.", "open": false },
{ "question": "How do managers approve timesheets?", "answer": "Managers approve timesheets via the 'Approval Queue' in the Timesheets module.", "open": false },
{ "question": "What is the deadline for timesheet submission?", "answer": "Timesheet deadlines are set by the organization and displayed in the Timesheets dashboard.", "open": false },
{ "question": "Can I set up recurring timesheet entries?", "answer": "Yes, recurring entries can be configured for repetitive tasks in the 'Recurring Entries' section.", "open": false },
{ "question": "What happens if I miss the timesheet deadline?", "answer": "Missed deadlines will result in a notification, and late submissions may require managerial approval.", "open": false },
{ "question": "How do I allocate hours to specific tasks?", "answer": "Allocate hours by selecting the task under the relevant project and entering the time worked.", "open": false },
{ "question": "Can I track billable and non-billable hours?", "answer": "Yes, you can categorize hours as billable or non-billable in the Timesheets module.", "open": false },
{ "question": "How do I view my total hours for a project?", "answer": "Total hours for a project are displayed in the 'Project Summary' tab.", "open": false },
{ "question": "Can I submit timesheets on behalf of my team?", "answer": "Yes, if you have managerial permissions, you can submit timesheets for your team.", "open": false },
{ "question": "How do I correct an error in a submitted timesheet?", "answer": "Errors can be corrected by recalling the timesheet, editing the details, and resubmitting it.", "open": false },
{ "question": "What is the purpose of the Timesheet Summary?", "answer": "The Timesheet Summary provides a consolidated view of hours worked, approvals, and pending submissions.", "open": false },
{ "question": "How do I log hours for a non-project task?", "answer": "Log non-project hours under the 'Miscellaneous' category in the Timesheets module.", "open": false },
{ "question": "Can I view my team's timesheets?", "answer": "Yes, team timesheets can be viewed under the 'Team Timesheets' section if you have access permissions.", "open": false },
{ "question": "How do I submit timesheets for leave days?", "answer": "Leave days can be marked in the 'Leave' section of the Timesheets module.", "open": false },
{ "question": "What is the process for approving overtime hours?", "answer": "Overtime hours are approved through the 'Overtime Approvals' section in the Timesheets module.", "open": false },
{ "question": "Can I track my weekly working hours?", "answer": "Yes, weekly working hours are displayed in the 'Weekly Overview' tab.", "open": false },
{ "question": "How do I enable timesheet reminders?", "answer": "Timesheet reminders can be configured in the 'Notification Settings' section.", "open": false },
{ "question": "What happens if my timesheet is overdue?", "answer": "Overdue timesheets will appear in the 'Pending Submissions' tab with an alert.", "open": false },
{ "question": "Can I delete a draft timesheet?", "answer": "Yes, draft timesheets can be deleted using the 'Delete Draft' option.", "open": false },
{ "question": "How do I view the approval status of my timesheet?", "answer": "Approval status is visible in the 'Approval History' section.", "open": false },
{ "question": "What is the process for creating a new timesheet template?", "answer": "New templates can be created under the 'Templates' section by defining tasks and hours.", "open": false },
{ "question": "Can I categorize hours by department?", "answer": "Yes, hours can be categorized by department in the 'Department Allocation' section.", "open": false },
{ "question": "How do I view timesheet analytics?", "answer": "Analytics can be accessed in the 'Timesheet Dashboard' for insights into hours worked and utilization rates.", "open": false },
{ "question": "Can I edit a recalled timesheet?", "answer": "Yes, recalled timesheets can be edited before resubmission.", "open": false },
{ "question": "How do I approve multiple timesheets at once?", "answer": "Multiple timesheets can be approved in bulk through the 'Batch Approvals' option.", "open": false },
{ "question": "What is the purpose of the Timesheet Calendar view?", "answer": "The Timesheet Calendar provides a visual representation of hours logged on specific dates.", "open": false },
{ "question": "Can I log hours for future dates?", "answer": "Future hours can only be logged if enabled by your organization's policy.", "open": false },
{ "question": "How do I track unbilled hours?", "answer": "Unbilled hours are tracked in the 'Unbilled Hours' tab of the Timesheets module.", "open": false },
{ "question": "Can I export team timesheet data?", "answer": "Yes, team timesheet data can be exported from the 'Team Summary' section.", "open": false },
{ "question": "How do I configure timesheet approval workflows?", "answer": "Approval workflows can be configured in the 'Approval Settings' section.", "open": false },
{ "question": "What is the Timesheet Utilization Report?", "answer": "This report provides insights into resource utilization based on logged hours.", "open": false },
{ "question": "Can I log break hours separately?", "answer": "Yes, break hours can be logged under the 'Breaks' category.", "open": false },

        ],
        "projects": [
          { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", open: false },
          { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", open: false },
          { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", open: false },
          { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", open: false },
          { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", open: false },
          { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", open: false },
          { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", open: false },
          { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", open: false },
          { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", open: false },
          { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", open: false },
          { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", open: false },
          { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", open: false },
          { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", open: false },
          { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", open: false },
          { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", open: false },
          { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", open: false },
          { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", open: false },
          { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", open: false },
          { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", open: false },
          { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", open: false },
          { question: "How do I create a new project?", answer: "To create a new project, go to the Project module, click 'New Project' and fill in the necessary details.", open: false },
          { question: "How do I assign tasks in a project?", answer: "Navigate to the project, select a task, and assign it to the team member.", open: false },
          { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", open: false },
          { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", open: false },
          { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", open: false },
          { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", open: false },
          { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", open: false },
          { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", open: false },
          { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", open: false },
          { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", open: false },
           ],
        "ats": [
        { "question": "How do I post a job opening?", "answer": "Go to the ATS module, click on 'Post Job', and fill out the job details.", "open": false },
        { "question": "How can I view applicants?", "answer": "Navigate to the 'Applicants' section in the ATS module to view all the applicants.", "open": false },
        { "question": "How do I track candidate applications?", "answer": "Candidate tracking is available in the ATS dashboard.", "open": false },
        { "question": "What is the interview feedback system?", "answer": "The feedback system allows evaluators to rate candidates.", "open": false },
        { "question": "How do I add new job postings?", "answer": "Go to the 'Job Postings' section and click 'Add New'.", "open": false },
        { "question": "Can I set up automated email responses?", "answer": "Yes, email responses can be automated in ATS settings.", "open": false },
        { "question": "How do I integrate ATS with other tools?", "answer": "Integration options are available in the settings.", "open": false },
        { "question": "What analytics are available in ATS?", "answer": "Analytics include candidate pipeline, time to hire, and more.", "open": false },
        { "question": "How do I delete a candidate profile?", "answer": "Use the 'Delete' option in the candidate profile page.", "open": false },
        { "question": "Can I share job postings externally?", "answer": "Yes, job postings can be shared via public links.", "open": false },
        { "question": "How can I schedule interviews?", "answer": "Interviews can be scheduled from the candidate profile page.", "open": false },
        { "question": "How do I tag candidates with specific skills?", "answer": "Use the tagging feature available in the candidate profile.", "open": false },
        { "question": "What does the Candidate Match Score mean?", "answer": "It indicates how well a candidate's profile matches the job requirements.", "open": false },
        { "question": "Can I assign team members to review candidates?", "answer": "Yes, team members can be assigned through the review section.", "open": false },
        { "question": "How do I update a candidate's status?", "answer": "Use the status dropdown in the candidate's profile to update their application stage.", "open": false },
        { "question": "How do I filter candidates by location?", "answer": "Use the filters section in the 'Applicants' tab to refine candidates by location.", "open": false },
        { "question": "Can external recruiters access the ATS?", "answer": "Yes, recruiters can access the ATS via assigned roles.", "open": false },
        { "question": "How do I set approval workflows for job requisitions?", "answer": "Approval workflows can be configured in the 'Job Requisition' settings.", "open": false },
        { "question": "What types of reports are available in ATS?", "answer": "Reports include hiring velocity, candidate source analysis, and rejection reasons.", "open": false },
        { "question": "Can I integrate video conferencing tools for interviews?", "answer": "Yes, integrations for tools like Zoom or Teams are available in the settings.", "open": false },
        { "question": "How do I notify candidates of interview schedules?", "answer": "Notifications can be sent via the ATS email automation feature.", "open": false },
        { "question": "Can I duplicate an existing job posting?", "answer": "Yes, job postings can be duplicated via the 'Job Details' page.", "open": false },
        { "question": "How do I view candidate pipelines for active job openings?", "answer": "Candidate pipelines are available on the ATS dashboard under 'Active Job Openings'.", "open": false },
        { "question": "How can I filter job postings by status?", "answer": "Use the status filter in the 'Job Postings' section to refine results.", "open": false },
        { "question": "How do I manage internal referrals in ATS?", "answer": "Referrals can be tracked in the 'Referrals' section under 'Applicants'.", "open": false },
        { "question": "What is the Candidate Pipeline view?", "answer": "It opens candidates at each stage of the recruitment process.", "open": false },
        { "question": "Can I attach additional documents to a candidate profile?", "answer": "Yes, additional documents can be uploaded to the candidate profile under 'Attachments'.", "open": false },
        { "question": "How do I search for specific candidates in the database?", "answer": "Use the global search bar in the ATS module to find candidates by name or keyword.", "open": false },
        { "question": "What happens to duplicate candidate profiles?", "answer": "Duplicate profiles are flagged, and users can choose to merge or delete them.", "open": false },
        { "question": "How do I track time-to-hire metrics?", "answer": "Time-to-hire metrics are available in the ATS analytics dashboard.", "open": false },
        { "question": "Can I customize the ATS dashboard?", "answer": "Yes, widgets and reports on the dashboard can be customized.", "open": false },
        { "question": "How do I enable automated reminders for interviews?", "answer": "Set up reminders in the 'Interview Scheduler' section of the ATS module.", "open": false },
        { "question": "What is the role of job requisition templates?", "answer": "Templates simplify the creation of new job postings by predefining roles, descriptions, and criteria.", "open": false },
        { "question": "How do I reject a candidate and send feedback?", "answer": "Use the 'Reject' option in the candidate profile, and select a feedback template for automated communication.", "open": false },
        { "question": "Can I restrict access to certain job postings?", "answer": "Yes, access restrictions can be set based on roles and permissions.", "open": false },
        { "question": "How do I update job posting details?", "answer": "Go to the 'Job Postings' section, select the job, and edit its details.", "open": false },
        { "question": "How can I view rejected candidates?", "answer": "Rejected candidates can be found in the 'Rejected' tab under 'Applicants'.", "open": false },
        { "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
        { "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
        { "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
        { "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },
        { "question": "What is the role of job requisition templates?", "answer": "Templates simplify the creation of new job postings by predefining roles, descriptions, and criteria.", "open": false },
        { "question": "How do I reject a candidate and send feedback?", "answer": "Use the 'Reject' option in the candidate profile, and select a feedback template for automated communication.", "open": false },
        { "question": "Can I restrict access to certain job postings?", "answer": "Yes, access restrictions can be set based on roles and permissions.", "open": false },
        { "question": "How do I update job posting details?", "answer": "Go to the 'Job Postings' section, select the job, and edit its details.", "open": false },
        { "question": "How can I view rejected candidates?", "answer": "Rejected candidates can be found in the 'Rejected' tab under 'Applicants'.", "open": false },
        { "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
        { "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
        { "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
        { "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },
        { "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
        { "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
        { "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
        { "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },
        { "question": "What is the role of job requisition templates?", "answer": "Templates simplify the creation of new job postings by predefining roles, descriptions, and criteria.", "open": false },
        { "question": "How do I reject a candidate and send feedback?", "answer": "Use the 'Reject' option in the candidate profile, and select a feedback template for automated communication.", "open": false },
        { "question": "Can I restrict access to certain job postings?", "answer": "Yes, access restrictions can be set based on roles and permissions.", "open": false },
        { "question": "How do I update job posting details?", "answer": "Go to the 'Job Postings' section, select the job, and edit its details.", "open": false },
        { "question": "How can I view rejected candidates?", "answer": "Rejected candidates can be found in the 'Rejected' tab under 'Applicants'.", "open": false },
        { "question": "Can I track candidates from external job boards?", "answer": "Yes, candidates from integrated job boards are automatically tracked in ATS.", "open": false },
        { "question": "How do I set deadlines for job applications?", "answer": "Deadlines can be configured during job posting creation under the 'Application Deadline' field.", "open": false },
        { "question": "What is the candidate experience score?", "answer": "It reflects candidate feedback on the application and interview process.", "open": false },
        { "question": "How can I export candidate lists?", "answer": "Candidate lists can be exported as Excel or CSV files from the 'Applicants' section.", "open": false },
          ],
        "hr": [
        { "question": "What is the leave policy?", "answer": "The leave policy includes details on annual leave, sick leave, and other entitlements.", "open": false },
        { "question": "How do I submit a leave request?", "answer": "Use the 'Submit Leave Request' option in the HR module.", "open": false },
        { "question": "Can I track my leave balance?", "answer": "Yes, leave balance is visible in the HR dashboard under 'Leave Management'.", "open": false },
        { "question": "What is the onboarding process?", "answer": "The onboarding process includes document submission, orientation sessions, and task assignments.", "open": false },
        { "question": "How do I update my personal information?", "answer": "Go to the HR module, select 'Profile Management', and edit your personal details.", "open": false },
        { "question": "What is the grievance redressal process?", "answer": "Grievances can be reported through the HR portal's 'Grievance' section for resolution.", "open": false },
        { "question": "How do I access my payslips?", "answer": "Payslips are available under the 'Payroll' section of the HR module.", "open": false },
        { "question": "Can I request training programs?", "answer": "Yes, training requests can be made under the 'Learning & Development' section in HR.", "open": false },
        { "question": "What is the exit process?", "answer": "The exit process involves resignation submission, clearance procedures, and feedback submission.", "open": false },
        { "question": "How do I contact the HR team?", "answer": "The HR team's contact details are listed in the HR portal under 'Contact Us'.", "open": false },
        { "question": "How do I apply for a salary advance?", "answer": "Salary advance requests can be submitted through the 'Payroll Requests' section.", "open": false },
        { "question": "Can I view my attendance records?", "answer": "Yes, attendance records are available in the 'Attendance' section of the HR module.", "open": false },
        { "question": "How do I submit performance feedback?", "answer": "Feedback can be submitted through the 'Performance Review' section in the HR module.", "open": false },
        { "question": "What is the process for internal job applications?", "answer": "Internal job applications can be submitted via the 'Career Opportunities' section in HR.", "open": false },
        { "question": "How do I nominate someone for an award?", "answer": "Nominations can be submitted through the 'Rewards & Recognition' section.", "open": false },
        { "question": "What is the process for relocation assistance?", "answer": "Relocation assistance requests can be submitted under the 'Relocation' section in HR.", "open": false },
        { "question": "Can I view company policies in the HR module?", "answer": "Yes, all company policies are accessible under the 'Policies' section.", "open": false },
        { "question": "How do I submit expense claims?", "answer": "Expense claims can be submitted through the 'Expense Management' section in HR.", "open": false },
        { "question": "What is the process for applying for a promotion?", "answer": "Promotion applications are handled through the 'Career Growth' section in the HR module.", "open": false },
        { "question": "How do I register for corporate events?", "answer": "Corporate event registration is available under the 'Events' section in HR.", "open": false },
        { "question": "What is the procedure for employee transfers?", "answer": "Employee transfers can be requested through the 'Employee Transfers' section in HR.", "open": false },
         ],
    
        "crm": [
        { "question": "How can you access the Accounts application?", "answer": "Locate the App Navigation Section, search for the 'Accounts' application, and click to open it. For quick access, you can pin the Accounts app to the navigation bar.", "open": false },
        { "question": "How do you customize the columns visible in Accounts?", "answer": "Use the Customize option to select, deselect, and rearrange columns. Simply drag and drop the desired fields to tailor the table view to match your workflow requirements.", "open": false },
        { "question": "How do filters help in Accounts?", "answer": "Filters allow users to refine data based on specific criteria, such as location, stakeholders, or account status, simplifying navigation and improving access to relevant account records.", "open": false },
        { "question": "How do you update financial details in Accounts?", "answer": "Navigate to the Account Financials section, edit fields like payment terms, tax details, billing currency, or GSTIN, and save the updates for accurate financial record management.", "open": false },
        { "question": "What is the Opportunities Landing Page?", "answer": "The Opportunities Landing Page lists all opportunities. By default, it opens opportunities linked to the logged-in user ('My Opportunities'), but it can also display all opportunities in the system.", "open": false },
        { "question": "What does the Opportunity Audit Log open?", "answer": "The Opportunity Audit Log maintains a detailed history of all changes made to opportunity details, including updates to timelines, stakeholders, and revenue information.", "open": false },
        { "question": "What happens when an Opportunity is closed as Won?", "answer": "Once an Opportunity is closed as Won, the associated Quote becomes locked. This ensures data integrity and prevents further modifications to the approved project cost structure.", "open": false },
        { "question": "What does the GM% field open in Quotes?", "answer": "The GM% (Gross Margin Percentage) indicates profitability, calculated as: GM% = (Total Revenue - Total Cost) / Total Revenue × 100. It helps assess project margins and financial health.", "open": false },
        { "question": "How do you create a Quote?", "answer": "Navigate to the Opportunity module > Quote tab, click Create Quote, then add details like services, positions, rates, and units. Save the quote to initiate project costing and tracking.", "open": false },
        { "question": "What is the Quote Monthly Projection Report?", "answer": "It aggregates active Quote data to display month-wise revenue and effort projections. The report helps track expected revenue, identify trends, and plan resource allocations effectively.", "open": false },
        { "question": "How do you add Opportunity stakeholders?", "answer": "Stakeholders can be added via the 'Stakeholders' tab within the Opportunity details page.", "open": false },
        { "question": "What is the purpose of Parent Opportunities?", "answer": "Parent Opportunities link to smaller dependent opportunities for better tracking and management.", "open": false },
        { "question": "How do you access the Accounts Audit Log?", "answer": "Go to the Accounts section, select an account, and view the 'Audit Log' tab.", "open": false },
        { "question": "Can Quotes be modified after project creation?", "answer": "No, Quotes are locked after project creation, but new positions can still be added.", "open": false },
        { "question": "How do you apply filters in Opportunities?", "answer": "Filters can be applied in the Opportunities dashboard to refine views based on criteria such as stage, stakeholder, and timeline.", "open": false },
        { "question": "What are Exception Widgets?", "answer": "Exception Widgets in the Sales Dashboard highlight anomalies like inactive quotes, overdue opportunities, or mismatched data.", "open": false },
         ],
    
        "finance": [
        { "question": "How can I generate financial reports?", "answer": "Navigate to Finance > Reports > Generate Report and select the report type you need.", "open": false },
        { "question": "What payment methods are supported?", "answer": "KEBS supports payment methods such as credit cards, PayPal, and bank transfers.", "open": false },
        { "question": "How do I update billing information?", "answer": "Go to the Billing section in your account settings and update payment or billing details.", "open": false },
        { "question": "What is the refund policy?", "answer": "The refund policy is outlined in the Terms and Conditions section under Finance policies.", "open": false },
        { "question": "Can I set up recurring payments?", "answer": "Yes, recurring payments can be configured in the 'Recurring Payments' section of Finance.", "open": false },
        { "question": "How do I view my invoice history?", "answer": "Go to Finance > Invoices to view the full history of your invoices.", "open": false },
        { "question": "Can I download invoices?", "answer": "Yes, invoices can be downloaded as PDF files from the 'Invoices' section.", "open": false },
        { "question": "What currencies are supported?", "answer": "KEBS supports multiple currencies, including USD, EUR, GBP, and INR.", "open": false },
        { "question": "How do I dispute a charge?", "answer": "To dispute a charge, contact support through the 'Dispute Charge' option in Finance.", "open": false },
        { "question": "Can I add multiple payment methods?", "answer": "Yes, you can add and manage multiple payment methods in the 'Payment Methods' section.", "open": false },
        { "question": "How do I update tax details?", "answer": "Tax details can be updated in the 'Tax Management' section under Finance.", "open": false },
        { "question": "Can I split payments across multiple accounts?", "answer": "Yes, payments can be split using the 'Split Payment' option during checkout.", "open": false },
        { "question": "How do I automate expense approvals?", "answer": "Expense approvals can be automated in the 'Expense Settings' section of Finance.", "open": false },
        { "question": "What financial KPIs are available in Finance?", "answer": "KPIs such as profit margins, expense ratios, and revenue growth metrics are available in the Finance dashboard.", "open": false },
        { "question": "How do I access my organization's budget overview?", "answer": "The budget overview can be found in the 'Budget Management' section.", "open": false },
        { "question": "How do I submit an expense claim?", "answer": "Expense claims can be submitted through the 'Expense Management' section in Finance.", "open": false },
        { "question": "Can I schedule automatic financial report generation?", "answer": "Yes, reports can be scheduled for automatic generation in the 'Report Scheduler' section.", "open": false },
        { "question": "What is the process for reconciling transactions?", "answer": "Transactions can be reconciled through the 'Reconciliation' tab under Finance.", "open": false },
        { "question": "How do I track overdue payments?", "answer": "Overdue payments are displayed in the 'Accounts Receivable' section.", "open": false },
        { "question": "What is the function of the Revenue Tracker?", "answer": "The Revenue Tracker monitors incoming revenue streams and categorizes them for better analysis.", "open": false },
        { "question": "How do I configure late payment penalties?", "answer": "Late payment penalties can be set up in the 'Payment Policies' section.", "open": false },
        { "question": "Can I generate profit and loss statements?", "answer": "Yes, profit and loss statements are available in the 'Reports' section.", "open": false },
        { "question": "How do I categorize expenses?", "answer": "Expenses can be categorized under 'Expense Categories' in the Finance module.", "open": false },
        { "question": "What is the purpose of the Cash Flow Dashboard?", "answer": "The Cash Flow Dashboard tracks inflows and outflows, giving a real-time view of cash availability.", "open": false },
        { "question": "Can I link external bank accounts?", "answer": "Yes, external bank accounts can be linked via the 'Bank Integration' option.", "open": false },
        { "question": "How do I manage payment reminders?", "answer": "Payment reminders can be configured in the 'Reminder Settings' section of Finance.", "open": false },
        { "question": "Can I track vendor payments?", "answer": "Yes, vendor payments can be tracked in the 'Accounts Payable' section.", "open": false },
        { "question": "What is the process for creating purchase orders?", "answer": "Purchase orders can be created in the 'Purchase Order' section by filling in required details and saving them.", "open": false },
         ],
    
        "timesheet": [
        { "question": "How do I submit a timesheet?", "answer": "Go to the Timesheets module, select the relevant project, enter hours worked, and click 'Submit'.", "open": false },
        { "question": "Can I edit a submitted timesheet?", "answer": "Yes, submitted timesheets can be edited until they are approved by a manager.", "open": false },
        { "question": "How do I track my timesheet approvals?", "answer": "Timesheet approvals can be tracked under the 'Approval Status' tab in the Timesheets module.", "open": false },
        { "question": "What happens if my timesheet is rejected?", "answer": "You will receive a notification, and you can edit and resubmit the timesheet for approval.", "open": false },
        { "question": "Can I submit timesheets for multiple projects?", "answer": "Yes, you can submit timesheets for multiple projects by selecting each project separately in the Timesheets module.", "open": false },
        { "question": "How do I record overtime in my timesheet?", "answer": "Overtime can be recorded by selecting the 'Overtime' category and entering the additional hours.", "open": false },
        { "question": "Can I add comments to my timesheet?", "answer": "Yes, comments can be added in the 'Notes' section before submitting the timesheet.", "open": false },
        { "question": "How do I view past timesheets?", "answer": "Past timesheets can be accessed under the 'Timesheet History' section in the Timesheets module.", "open": false },
        { "question": "Can I export my timesheets?", "answer": "Yes, timesheets can be exported as Excel or PDF files using the 'Export' option.", "open": false },
        { "question": "How do managers approve timesheets?", "answer": "Managers approve timesheets via the 'Approval Queue' in the Timesheets module.", "open": false },
        { "question": "What is the deadline for timesheet submission?", "answer": "Timesheet deadlines are set by the organization and displayed in the Timesheets dashboard.", "open": false },
        { "question": "Can I set up recurring timesheet entries?", "answer": "Yes, recurring entries can be configured for repetitive tasks in the 'Recurring Entries' section.", "open": false },
        { "question": "What happens if I miss the timesheet deadline?", "answer": "Missed deadlines will result in a notification, and late submissions may require managerial approval.", "open": false },
        { "question": "How do I allocate hours to specific tasks?", "answer": "Allocate hours by selecting the task under the relevant project and entering the time worked.", "open": false },
        { "question": "Can I track billable and non-billable hours?", "answer": "Yes, you can categorize hours as billable or non-billable in the Timesheets module.", "open": false },
        { "question": "How do I view my total hours for a project?", "answer": "Total hours for a project are displayed in the 'Project Summary' tab.", "open": false },
        { "question": "Can I submit timesheets on behalf of my team?", "answer": "Yes, if you have managerial permissions, you can submit timesheets for your team.", "open": false },
        { "question": "How do I correct an error in a submitted timesheet?", "answer": "Errors can be corrected by recalling the timesheet, editing the details, and resubmitting it.", "open": false },
        { "question": "What is the purpose of the Timesheet Summary?", "answer": "The Timesheet Summary provides a consolidated view of hours worked, approvals, and pending submissions.", "open": false },
        { "question": "How do I log hours for a non-project task?", "answer": "Log non-project hours under the 'Miscellaneous' category in the Timesheets module.", "open": false },
        { "question": "Can I view my team's timesheets?", "answer": "Yes, team timesheets can be viewed under the 'Team Timesheets' section if you have access permissions.", "open": false },
        { "question": "How do I submit timesheets for leave days?", "answer": "Leave days can be marked in the 'Leave' section of the Timesheets module.", "open": false },
        { "question": "What is the process for approving overtime hours?", "answer": "Overtime hours are approved through the 'Overtime Approvals' section in the Timesheets module.", "open": false },
        { "question": "Can I track my weekly working hours?", "answer": "Yes, weekly working hours are displayed in the 'Weekly Overview' tab.", "open": false },
        { "question": "How do I enable timesheet reminders?", "answer": "Timesheet reminders can be configured in the 'Notification Settings' section.", "open": false },
        { "question": "What happens if my timesheet is overdue?", "answer": "Overdue timesheets will appear in the 'Pending Submissions' tab with an alert.", "open": false },
        { "question": "Can I delete a draft timesheet?", "answer": "Yes, draft timesheets can be deleted using the 'Delete Draft' option.", "open": false },
        { "question": "How do I view the approval status of my timesheet?", "answer": "Approval status is visible in the 'Approval History' section.", "open": false },
        { "question": "What is the process for creating a new timesheet template?", "answer": "New templates can be created under the 'Templates' section by defining tasks and hours.", "open": false },
        { "question": "Can I categorize hours by department?", "answer": "Yes, hours can be categorized by department in the 'Department Allocation' section.", "open": false },
        { "question": "How do I view timesheet analytics?", "answer": "Analytics can be accessed in the 'Timesheet Dashboard' for insights into hours worked and utilization rates.", "open": false },
        { "question": "Can I edit a recalled timesheet?", "answer": "Yes, recalled timesheets can be edited before resubmission.", "open": false },
        { "question": "How do I approve multiple timesheets at once?", "answer": "Multiple timesheets can be approved in bulk through the 'Batch Approvals' option.", "open": false },
        { "question": "What is the purpose of the Timesheet Calendar view?", "answer": "The Timesheet Calendar provides a visual representation of hours logged on specific dates.", "open": false },
        { "question": "Can I log hours for future dates?", "answer": "Future hours can only be logged if enabled by your organization's policy.", "open": false },
        { "question": "How do I track unbilled hours?", "answer": "Unbilled hours are tracked in the 'Unbilled Hours' tab of the Timesheets module.", "open": false },
        { "question": "Can I export team timesheet data?", "answer": "Yes, team timesheet data can be exported from the 'Team Summary' section.", "open": false },
        { "question": "How do I configure timesheet approval workflows?", "answer": "Approval workflows can be configured in the 'Approval Settings' section.", "open": false },
        { "question": "What is the Timesheet Utilization Report?", "answer": "This report provides insights into resource utilization based on logged hours.", "open": false },
        { "question": "Can I log break hours separately?", "answer": "Yes, break hours can be logged under the 'Breaks' category.", "open": false },
         ]
    
      };

      $scope.toggleFAQ = function (faq) {
        faq.open = !faq.open;
    };

    $scope.totalPages = function () {
        const faqs = $scope.currentCategory
            ? $scope.faqData[$scope.currentCategory] || []
            : [].concat(...Object.values($scope.faqData)); // Combine all FAQs if no category is selected
        return Math.ceil(faqs.length / $scope.itemsPerPage);
    };

    $scope.updatePaginatedFaqs = function () {
        const faqs = $scope.currentCategory
            ? $scope.faqData[$scope.currentCategory] || []
            : [].concat(...Object.values($scope.faqData)); // Combine all FAQs if no category is selected
        const startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
        const endIndex = startIndex + $scope.itemsPerPage;
        $scope.selectedFAQs = faqs.slice(startIndex, endIndex); // Paginate the FAQs
    };

    $scope.renderFAQs = function (category, page = 1) {
        $scope.currentCategory = category;
        $scope.currentPage = page;
        $scope.updatePaginatedFaqs(); // Ensure paginated FAQs are updated
        $scope.initializePagination(); // Ensure pagination is initialized
    };
    

    $scope.selectTab = function (category) {
        $scope.activeTab = category;
        $scope.renderFAQs(category, 1);
    };

    $scope.initializePagination = function () {
        const totalPages = $scope.totalPages();
        $scope.paginationButtons = [];

        // Add "First" and "Previous" buttons
        $scope.paginationButtons.push({ label: '«', action: 'first', disabled: $scope.currentPage === 1 });
        $scope.paginationButtons.push({ label: '‹', action: 'prev', disabled: $scope.currentPage === 1 });

        const maxVisiblePages = 3; // Number of visible pages
        let startPage = Math.max(1, $scope.currentPage - 1);
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust for first pages
        if ($scope.currentPage <= 2) {
            startPage = 1;
            endPage = Math.min(maxVisiblePages, totalPages);
        }

        // Add visible page numbers
        for (let i = startPage; i <= endPage; i++) {
            $scope.paginationButtons.push({ label: i, action: i, active: $scope.currentPage === i });
        }

        // Add "..." and the last few pages
        if (endPage < totalPages - 2) {
            $scope.paginationButtons.push({ label: '...', action: null });
        }

        for (let i = Math.max(totalPages - 2, endPage + 1); i <= totalPages; i++) {
            $scope.paginationButtons.push({ label: i, action: i, active: $scope.currentPage === i });
        }

        // Add "Next" and "Last" buttons
        $scope.paginationButtons.push({ label: '›', action: 'next', disabled: $scope.currentPage === totalPages });
        $scope.paginationButtons.push({ label: '»', action: 'last', disabled: $scope.currentPage === totalPages });
    };

    $scope.goToPage = function (action) {
        const totalPages = $scope.totalPages();

        if (action === 'first') {
            $scope.currentPage = 1;
        } else if (action === 'last') {
            $scope.currentPage = totalPages;
        } else if (action === 'prev') {
            $scope.currentPage = Math.max(1, $scope.currentPage - 1);
        } else if (action === 'next') {
            $scope.currentPage = Math.min(totalPages, $scope.currentPage + 1);
        } else if (typeof action === 'number') {
            $scope.currentPage = action;
        }

        $scope.updatePaginatedFaqs(); // Update the displayed FAQs
        $scope.initializePagination(); // Update pagination buttons
    };

    $scope.renderFAQs($scope.currentCategory, 1); // Initialize with the first category



/* ####################################################################################################################################### */


}]);