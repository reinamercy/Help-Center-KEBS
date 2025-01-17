var app = angular.module('helpCenterApp', []);
app.controller('MainController', ['$scope', function($scope) {
    
    $scope.userName = "John Doe";
    $scope.searchQuery = "";
    $scope.tabs = ["General", "Projects","ATS","Finance","Timesheet", "CRM", "HR"];
    $scope.selectedTab = "General"; 
    $scope.faqs = {
        "General": [
            { question: "How do I log my work hours using the Timesheet module?", answer: "Navigate to the Timesheet module and enter your hours.", show: false },
            { question: "How do I create a new project?", answer: "Go to the Projects module and click 'New Project'.", show: false },
            { question: "How can I update my account settings?", answer: "Go to the Account Settings page and edit the details.", show: false },
            { question: "What browsers are supported?", answer: "We support the latest versions of Chrome, Firefox, and Edge.", show: false },
            { question: "How do I reset my password?", answer: "Click on 'Forgot Password' on the login page to reset your password.", show: false },
            { question: "Can I access the platform on mobile?", answer: "Yes, our platform is mobile-friendly.", show: false },
            { question: "What is the role of an admin user?", answer: "An admin user can manage user accounts and settings.", show: false },
            { question: "How do I deactivate my account?", answer: "Contact support to deactivate your account.", show: false },
            { question: "Where can I find the user manual?", answer: "The user manual is available under the 'Help' section.", show: false },
            { question: "How do I contact support?", answer: "You can contact support via the 'Contact Us' page.", show: false }
        ],
        "Projects": [
            { question: "What is the difference between a milestone and a task?", answer: "A milestone is a significant stage, while a task is a specific action.", show: false },
            { question: "How do I assign tasks to team members?", answer: "Use the 'Assign Task' option in the Projects module.", show: false },
            { question: "Can I track project deadlines?", answer: "Yes, deadlines are visible in the project overview.", show: false },
            { question: "How do I archive completed projects?", answer: "Click 'Archive' in the project settings.", show: false },
            { question: "What is a project template?", answer: "A project template is a predefined structure for new projects.", show: false },
            { question: "Can I add external collaborators?", answer: "Yes, you can invite external users to your project.", show: false },
            { question: "How do I set project priorities?", answer: "Use the priority dropdown in the project settings.", show: false },
            { question: "What are dependencies in a project?", answer: "Dependencies define the order of task execution.", show: false },
            { question: "How do I export project data?", answer: "Use the 'Export' option in the project overview.", show: false },
            { question: "Can I link tasks between projects?", answer: "Yes, use the cross-project linking feature.", show: false }
        ],
        
        "Finance": [
            { question: "How can I generate financial reports?", answer: "Navigate to Finance > Reports > Generate Report.", show: false },
            { question: "What payment methods are supported?", answer: "We support credit cards, PayPal, and bank transfers.", show: false },
            { question: "How do I update billing information?", answer: "Go to the Billing section in your account settings.", show: false },
            { question: "What is the refund policy?", answer: "Our refund policy is detailed in the Terms and Conditions.", show: false },
            { question: "Can I set up recurring payments?", answer: "Yes, use the recurring payment option in Finance.", show: false },
            { question: "How do I view my invoice history?", answer: "Go to Finance > Invoices to view your history.", show: false },
            { question: "Can I download invoices?", answer: "Yes, invoices can be downloaded as PDFs.", show: false },
            { question: "What currencies are supported?", answer: "We support multiple currencies, including USD, EUR, and GBP.", show: false },
            { question: "How do I dispute a charge?", answer: "Contact support with the details of the disputed charge.", show: false },
            { question: "Can I add multiple payment methods?", answer: "Yes, you can add and manage multiple payment methods.", show: false }
        ],

        "Timesheet": [
            { question: "What happens when tasks are added manually?", answer: "Tasks appear under the selected project charge code, and employees can enter hours only against the assigned tasks.", show: false },
            { question: "How to edit a locked timesheet?", answer: "Locked timesheets cannot be edited. To update, request your manager or HR to unlock the timesheet for the necessary corrections.", show: false },
            { question: "How can you fix an 'Hours Missing' error when saving a timesheet?", answer: "Ensure all weekdays have the required working hours entered. Use Quick Fill for faster updates or manually enter hours in the respective time tiles to resolve the error.", show: false },
            { question: "How do managers get notified about pending approvals?", answer: "Managers receive system-triggered notifications under the 'Awaiting Requests' tab. Notifications may also appear in the dashboard or via email alerts.", show: false },
            { question: "Why are locked timesheets non-editable, and how can they be unlocked?", answer: "Locked timesheets ensure compliance with deadlines. To unlock, employees must request managers or HR for temporary access to make changes before resubmission.", show: false },
            { question: "How to edit an approved timesheet?", answer: "Approved timesheets are locked for edits. Employees must request the manager to reject the timesheet, which then becomes editable.", show: false },
            { question: "What is the Prefill Timesheet option?", answer: "The Prefill option imports charge codes from the previous week but does not include the previously booked hours.", show: false },
            { question: "How can I remove a task from the timesheet?", answer: "Use the 'Remove from Timesheet' option available in the menu.", show: false },
            { question: "What data does the Timesheet Daily Log Report provide?", answer: "It provides day-wise and task-wise records of all timesheet entries.", show: false },
            { question: "What are Timesheet Events?", answer: "Timesheet Events capture critical details, such as an employee’s last working day, after which no future timesheet entries are permitted.", show: false }
        ],
        "ATS": [
            { question: "How do I schedule interviews?", answer: "Use the 'Schedule Interview' option in the ATS module.", show: false },
            { question: "Can I customize interview templates?", answer: "Yes, templates can be customized in the ATS settings.", show: false },
            { question: "How do I track candidate applications?", answer: "Candidate tracking is available in the ATS dashboard.", show: false },
            { question: "What is the interview feedback system?", answer: "The feedback system allows evaluators to rate candidates.", show: false },
            { question: "How do I add new job postings?", answer: "Go to the 'Job Postings' section and click 'Add New'.", show: false },
            { question: "Can I set up automated email responses?", answer: "Yes, email responses can be automated in ATS settings.", show: false },
            { question: "How do I integrate ATS with other tools?", answer: "Integration options are available in the settings.", show: false },
            { question: "What analytics are available in ATS?", answer: "Analytics include candidate pipeline, time to hire, and more.", show: false },
            { question: "How do I delete a candidate profile?", answer: "Use the 'Delete' option in the candidate profile page.", show: false },
            { question: "Can I share job postings externally?", answer: "Yes, job postings can be shared via public links.", show: false }
        ],
        "CRM": [
            { question: "How can you access the Accounts application?", answer: "Locate the App Navigation Section, search for the 'Accounts' application, and click to open it. For quick access, you can pin the Accounts app to the navigation bar.", show: false },
            { question: "How do you customize the columns visible in Accounts?", answer: "Use the Customize option to select, deselect, and rearrange columns. Simply drag and drop the desired fields to tailor the table view to match your workflow requirements.", show: false },
            { question: "How do filters help in Accounts?", answer: "Filters allow users to refine data based on specific criteria, such as location, stakeholders, or account status, simplifying navigation and improving access to relevant account records.", show: false },
            { question: "How do you update financial details in Accounts?", answer: "Navigate to the Account Financials section, edit fields like payment terms, tax details, billing currency, or GSTIN, and save the updates for accurate financial record management.", show: false },
            { question: "What is the Opportunities Landing Page?", answer: "The Opportunities Landing Page lists all opportunities. By default, it shows opportunities linked to the logged-in user ('My Opportunities'), but it can also display all opportunities in the system.", show: false },
            { question: "What does the Opportunity Audit Log show?", answer: "The Opportunity Audit Log maintains a detailed history of all changes made to opportunity details, including updates to timelines, stakeholders, and revenue information.", show: false },
            { question: "What happens when an Opportunity is closed as Won?", answer: "Once an Opportunity is closed as Won, the associated Quote becomes locked. This ensures data integrity and prevents further modifications to the approved project cost structure.", show: false },
            { question: "What does the GM% field show in Quotes?", answer: "The GM% (Gross Margin Percentage) indicates profitability, calculated as: GM% = (Total Revenue - Total Cost) / Total Revenue × 100. It helps assess project margins and financial health.", show: false },
            { question: "How do you create a Quote?", answer: "Navigate to the Opportunity module > Quote tab, click Create Quote, then add details like services, positions, rates, and units. Save the quote to initiate project costing and tracking.", show: false },
            { question: "What is the Quote Monthly Projection Report?", answer: "It aggregates active Quote data to display month-wise revenue and effort projections. The report helps track expected revenue, identify trends, and plan resource allocations effectively.", show: false }
        ],
        "HR": [
            { question: "What is the leave policy?", answer: "The leave policy includes details on annual leave and sick leave.", show: false },
            { question: "How do I submit a leave request?", answer: "Use the 'Submit Leave Request' option in the HR module.", show: false },
            { question: "Can I track my leave balance?", answer: "Yes, leave balance is visible in the HR dashboard.", show: false },
            { question: "What is the onboarding process?", answer: "The onboarding process includes document submission and orientation.", show: false },
            { question: "How do I update my personal information?", answer: "Go to the HR module and edit your profile.", show: false },
            { question: "What is the grievance redressal process?", answer: "Grievances can be reported through the HR portal.", show: false },
            { question: "How do I access my payslips?", answer: "Payslips are available under the 'Payroll' section.", show: false },
            { question: "Can I request training programs?", answer: "Yes, training requests can be made through the HR module.", show: false },
            { question: "What is the exit process?", answer: "The exit process involves clearance and feedback submission.", show: false },
            { question: "How do I contact the HR team?", answer: "The HR team's contact details are available in the HR portal.", show: false }
        ]
    };
    $scope.selectTab = function(tab) {
        $scope.selectedTab = tab;
    };
    $scope.toggleFaq = function(index) {
        $scope.faqs[$scope.selectedTab][index].show = !$scope.faqs[$scope.selectedTab][index].show;
    };
}]);
const sidebarItems = document.querySelectorAll('.sidebar li');
sidebarItems.forEach(item => {
    item.addEventListener('click', function (e) {
        sidebarItems.forEach(icon => icon.classList.remove('active'));
        this.classList.add('active');
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}); 