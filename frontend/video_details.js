angular.module('videoApp', []).controller('VideoDetailsController', ['$scope', '$window', function($scope, $window) {

    const params = new URLSearchParams($window.location.search);
    $scope.videoDetails = {
        title: params.get('title'),
        description: params.get('description'),
        thumbnail: params.get('thumbnail'),
        
    };
    const videoData = {
        "Project Tips and Tricks": [
            { thumbnail: "images/video-thumbnail-1.png", title: "Introduction to Dashboards", description: "Learn the basics of dashboards.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Best Practices", description: "Tips for optimizing your workflow.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Advanced Features", description: "Explore advanced tools and features.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Customizing Views", description: "Learn how to customize dashboards.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Collaboration Features", description: "Improve teamwork with dashboards.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Project Monitoring", description: "Track progress effectively.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Streamlining Workflows", description: "Optimize project workflows.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Goal Setting Strategies", description: "Master goal-setting techniques.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Budget Management Tips", description: "Manage project budgets efficiently.", category: "Projects" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Effective Communication", description: "Enhance team communication.", category: "Projects" }
        ],
        "Applicant Tracking System": [
            { thumbnail: "images/video-thumbnail-1.png", title: "Job Posting Essentials", description: "Learn the key steps for job postings.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Managing Candidate Data", description: "Tips to manage applicant data effectively.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Scheduling Interviews", description: "Streamline your interview scheduling.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Evaluating Candidates", description: "Techniques for effective evaluation.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Onboarding Process", description: "Optimize onboarding strategies.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Custom Reports", description: "Generate insightful hiring reports.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Integration Tools", description: "Integrate ATS with other tools.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Data Security", description: "Keep applicant data secure.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-3.png", title: "ATS Best Practices", description: "Maximize the benefits of ATS.", category: "ATS" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Candidate Experience", description: "Improve the applicant experience.", category: "ATS" }
        ],
        "Finance Tips": [
            { thumbnail: "images/video-thumbnail-1.png", title: "Budgeting Essentials", description: "Learn how to effectively manage budgets.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Tracking Expenses", description: "Easily monitor your expenses daily.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Profit Maximization", description: "Strategies to maximize your profits.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Investment Basics", description: "Understand the fundamentals of investing.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Advanced Budgeting", description: "Take your budgeting to the next level.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Tax Planning", description: "Plan taxes effectively.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Savings Strategies", description: "Learn techniques to save more.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Financial Health Check", description: "Evaluate your financial health.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Debt Management", description: "Reduce debt efficiently.", category: "Finance" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Retirement Planning", description: "Plan your retirement wisely.", category: "Finance" }
        ],
        "Timesheet Management": [
            { thumbnail: "images/video-thumbnail-1.png", title: "Timesheet Fundamentals", description: "Understand the basics of timesheets.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Advanced Time Tracking", description: "Utilize advanced time tracking techniques.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Timesheet Analytics", description: "Leverage analytics for better insights.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Team Productivity", description: "Boost team productivity with timesheets.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Automation Tips", description: "Automate time tracking effectively.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Error-Free Reporting", description: "Generate accurate reports.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Integration Tools", description: "Integrate timesheets with tools.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Optimization Techniques", description: "Optimize time management.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Mobile Timesheets", description: "Track time on the go.", category: "Timesheet" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Productivity Hacks", description: "Increase efficiency with hacks.", category: "Timesheet" }
        ],
        "Customer Relationship Management": [
            { thumbnail: "images/video-thumbnail-1.png", title: "CRM Basics", description: "Learn the fundamentals of CRM.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Customer Relationship Building", description: "Develop strong customer relationships.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Sales Pipeline Optimization", description: "Optimize your sales pipeline.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Lead Management Tips", description: "Effectively manage leads.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Customizing CRM Features", description: "Tailor CRM to your needs.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Automation in CRM", description: "Automate tasks with CRM.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Data Security in CRM", description: "Ensure customer data safety.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-2.png", title: "CRM Analytics", description: "Analyze customer data effectively.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Integrating CRM with Tools", description: "Seamlessly integrate CRM tools.", category: "CRM" },
            { thumbnail: "images/video-thumbnail-1.png", title: "CRM Best Practices", description: "Maximize CRM benefits.", category: "CRM" }
        ],
        "Human Resources": [
            { thumbnail: "images/video-thumbnail-1.png", title: "HR Fundamentals", description: "Learn the basics of HR.", category: "HR" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Recruitment Strategies", description: "Hire the best talent.", category: "HR" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Employee Engagement Tips", description: "Boost employee satisfaction.", category: "HR" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Payroll Management", description: "Simplify payroll processes.", category: "HR" },
            { thumbnail: "images/video-thumbnail-2.png", title: "Training and Development", description: "Upskill your workforce.", category: "HR" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Performance Management", description: "Track employee performance.", category: "HR" },
            { thumbnail: "images/video-thumbnail-1.png", title: "Workplace Diversity", description: "Promote inclusivity.", category: "HR" },
            { thumbnail: "images/video-thumbnail-2.png", title: "HR Analytics", description: "Leverage data for better HR decisions.", category: "HR" },
            { thumbnail: "images/video-thumbnail-3.png", title: "Conflict Resolution", description: "Handle workplace conflicts effectively.", category: "HR" },
            { thumbnail: "images/video-thumbnail-1.png", title: "HR Technology Trends", description: "Stay updated with the latest tools.", category: "HR" }
        ]

    };
    const category = params.get('category');

    const categoryMapping = {
        Projects: "Project Tips and Tricks",
        ATS: "Applicant Tracking System",
        Finance: "Finance Tips",
        Timesheet: "Timesheet Management",
        CRM: "Customer Relationship Management",
        HR: "Human Resources"
    };
    const normalizedCategory = categoryMapping[category];

    if (normalizedCategory && videoData[normalizedCategory]) {
        $scope.relatedVideos = videoData[normalizedCategory].filter(video => video.title !== $scope.videoDetails.title);
        console.log('Category:', normalizedCategory);
        console.log('Related Videos:', $scope.relatedVideos);
    } else {
        console.error('Category not found or undefined:', normalizedCategory);
        console.error('Available Categories:', Object.keys(videoData));
        $scope.relatedVideos = []; // Show nothing if the category is invalid
    }

        
    $scope.navigateToVideo = function(video) {
        const queryParams = new URLSearchParams({
            title: video.title,
            description: video.description,
            thumbnail: `images/${video.thumbnail}`, // Add "images/" to the path
            category: category
        }).toString();
        $window.location.href = `video_details.html?${queryParams}`;
    };
    

 $scope.feedbackFormVisible = null; // Tracks the visible feedback form
    $scope.feedbackText = ''; // Holds the user's feedback
    $scope.feedbackSubmitted = false; // Tracks whether feedback has been submitted
    $scope.isYesSelected = false; // Tracks Yes button state
    $scope.isNoSelected = false; // Tracks No button state

    // Show the appropriate feedback form
    $scope.showFeedbackForm = function(option) {
        $scope.feedbackFormVisible = option;
        $scope.isYesSelected = option === 'yes';
        $scope.isNoSelected = option === 'no';
        $scope.feedbackSubmitted = false; // Reset thank-you message visibility
    };

    // Handle form submission
    $scope.submitFeedback = function(option) {
        // Validate feedback
        if (!$scope.feedbackText || $scope.feedbackText.trim() === '') {
            alert('Please provide feedback before submitting!');
            return;
        }
    
    $scope.feedbackSubmitted = true; // Mark feedback as submitted
    $scope.feedbackFormVisible = null; // Hide feedback forms
    $scope.isYesSelected = false;
    $scope.isNoSelected = false;
    $scope.feedbackText = ''; // Clear feedback text

    $timeout(function () {
        const messageElement = document.getElementById('thank-you-message');
        if (messageElement) {
            messageElement.classList.add('hidden'); // Trigger fade-out effect
        }
    }, 1000); // Delay fade-out start by 1 second

    // Fully remove the message after 3 seconds
    $timeout(function () {
        $scope.feedbackSubmitted = false; // Reset the visibility for the next feedback
        const messageElement = document.getElementById('thank-you-message');
        if (messageElement) {
            messageElement.classList.remove('hidden'); // Reset the class for future fades
        }
    }, 3000);

    alert('Thanks for submitting your feedback!');
    };
    

    // Scroll functionality for related videos
    const cardWidth = 220; // Width of each card including padding/margin
    const gap = 20; // Gap between cards
    const scrollStep = cardWidth + gap;

    $scope.scrollVideos = function(direction) {
        const container = document.querySelector('.videos-container'); // Adjust selector if needed
        container.scrollBy({ left: direction * scrollStep, behavior: 'smooth' });
    };    
}]);
