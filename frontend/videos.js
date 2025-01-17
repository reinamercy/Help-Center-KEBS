var app = angular.module('app', []);
app.controller('VideoController', function ($scope) {
  
  $scope.selectedModule = null; 
  $scope.moduleList = ['Projects', 'ATS', 'Timesheet', 'Finance', 'CRM', 'HR'];

  $scope.moduleVideos = {
    Projects: [
      { thumbnail: 'images/t1.png', title: 'Understanding Project Milestones', description: 'Guide to setting and tracking project milestones.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Streamlining Communication', description: 'Best practices for communication within project teams.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Task Prioritization Techniques', description: 'Learn techniques to prioritize project tasks effectively.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Resource Allocation in Projects', description: 'Efficient allocation of resources to project tasks.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Setting Realistic Deadlines', description: 'Tips for setting achievable deadlines for your projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Effective Risk Management', description: 'Identify and mitigate risks in your projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Project Reporting Basics', description: 'Understand the basics of reporting project progress.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Collaboration with Remote Teams', description: 'Best practices for collaborating with remote project teams.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Agile Methodology Overview', description: 'An introduction to Agile methodology for projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Conducting Efficient Meetings', description: 'Tips for conducting effective and efficient project meetings.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Budget Management Essentials', description: 'Learn the essentials of managing project budgets.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Onboarding New Team Members', description: 'Best practices for onboarding new members into projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Setting SMART Goals', description: 'A guide to setting SMART goals for projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Tracking Task Dependencies', description: 'Learn to identify and manage dependencies in tasks.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Using Gantt Charts', description: 'How to effectively use Gantt charts for project planning.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Stakeholder Management', description: 'Engaging and managing stakeholders effectively.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Project Closure Guidelines', description: 'Steps to ensure successful closure of projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Creating Project Proposals', description: 'Learn how to create compelling project proposals.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Managing Change Requests', description: 'Tips for handling and incorporating change requests.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Effective Time Tracking', description: 'Techniques for tracking and managing project time.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Avoiding Scope Creep', description: 'Strategies to prevent scope creep in projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Improving Team Productivity', description: 'Tips to boost the productivity of your project team.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Defining Clear Deliverables', description: 'How to define and communicate project deliverables.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Monitoring Project KPIs', description: 'Track and analyze key performance indicators in projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Managing Client Expectations', description: 'Techniques to align and manage client expectations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Effective Use of Tools', description: 'Best practices for utilizing project management tools.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Work Breakdown Structures', description: 'How to create and use work breakdown structures.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Handling Conflict in Teams', description: 'Conflict resolution strategies for project managers.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Project Audit Preparation', description: 'Steps to prepare for project audits effectively.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Leadership Skills for Managers', description: 'Developing leadership skills for project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Managing High-Pressure Deadlines', description: 'Tips to handle high-pressure deadlines efficiently.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Cross-Functional Collaboration', description: 'Fostering collaboration across different teams.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Documenting Lessons Learned', description: 'Document lessons learned for future projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Using Kanban Boards', description: 'How to use Kanban boards for task tracking.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Understanding Critical Path', description: 'Identify the critical path in your project schedules.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Building Trust in Teams', description: 'Tips to build trust within your project team.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Evaluating Project Success', description: 'Learn metrics to evaluate project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Handling Project Escalations', description: 'How to effectively manage project escalations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Delegating Tasks Effectively', description: 'Tips for delegating tasks to your team members.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Continuous Improvement Practices', description: 'Incorporate continuous improvement in projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Managing Client Expectations', description: 'Techniques to align and manage client expectations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Effective Use of Tools', description: 'Best practices for utilizing project management tools.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Work Breakdown Structures', description: 'How to create and use work breakdown structures.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Handling Conflict in Teams', description: 'Conflict resolution strategies for project managers.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Project Audit Preparation', description: 'Steps to prepare for project audits effectively.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Leadership Skills for Managers', description: 'Developing leadership skills for project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Managing High-Pressure Deadlines', description: 'Tips to handle high-pressure deadlines efficiently.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Cross-Functional Collaboration', description: 'Fostering collaboration across different teams.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Documenting Lessons Learned', description: 'Document lessons learned for future projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Using Kanban Boards', description: 'How to use Kanban boards for task tracking.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Understanding Critical Path', description: 'Identify the critical path in your project schedules.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Building Trust in Teams', description: 'Tips to build trust within your project team.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Evaluating Project Success', description: 'Learn metrics to evaluate project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Handling Project Escalations', description: 'How to effectively manage project escalations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Delegating Tasks Effectively', description: 'Tips for delegating tasks to your team members.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Continuous Improvement Practices', description: 'Incorporate continuous improvement in projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Managing Client Expectations', description: 'Techniques to align and manage client expectations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Effective Use of Tools', description: 'Best practices for utilizing project management tools.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Work Breakdown Structures', description: 'How to create and use work breakdown structures.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Handling Conflict in Teams', description: 'Conflict resolution strategies for project managers.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Project Audit Preparation', description: 'Steps to prepare for project audits effectively.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Leadership Skills for Managers', description: 'Developing leadership skills for project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Managing High-Pressure Deadlines', description: 'Tips to handle high-pressure deadlines efficiently.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Cross-Functional Collaboration', description: 'Fostering collaboration across different teams.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Documenting Lessons Learned', description: 'Document lessons learned for future projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Using Kanban Boards', description: 'How to use Kanban boards for task tracking.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Understanding Critical Path', description: 'Identify the critical path in your project schedules.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Building Trust in Teams', description: 'Tips to build trust within your project team.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Evaluating Project Success', description: 'Learn metrics to evaluate project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Handling Project Escalations', description: 'How to effectively manage project escalations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Delegating Tasks Effectively', description: 'Tips for delegating tasks to your team members.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Continuous Improvement Practices', description: 'Incorporate continuous improvement in projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Managing Client Expectations', description: 'Techniques to align and manage client expectations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Effective Use of Tools', description: 'Best practices for utilizing project management tools.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Work Breakdown Structures', description: 'How to create and use work breakdown structures.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Handling Conflict in Teams', description: 'Conflict resolution strategies for project managers.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Project Audit Preparation', description: 'Steps to prepare for project audits effectively.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Leadership Skills for Managers', description: 'Developing leadership skills for project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Managing High-Pressure Deadlines', description: 'Tips to handle high-pressure deadlines efficiently.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Cross-Functional Collaboration', description: 'Fostering collaboration across different teams.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Documenting Lessons Learned', description: 'Document lessons learned for future projects.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Using Kanban Boards', description: 'How to use Kanban boards for task tracking.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Understanding Critical Path', description: 'Identify the critical path in your project schedules.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Building Trust in Teams', description: 'Tips to build trust within your project team.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t1.png', title: 'Evaluating Project Success', description: 'Learn metrics to evaluate project success.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t2.png', title: 'Handling Project Escalations', description: 'How to effectively manage project escalations.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t3.png', title: 'Delegating Tasks Effectively', description: 'Tips for delegating tasks to your team members.', tags: ['PROJECT TIPS'] },
  { thumbnail: 'images/t4.png', title: 'Continuous Improvement Practices', description: 'Incorporate continuous improvement in projects.', tags: ['PROJECT TIPS'] },
  
    ],
    ATS: [
      { thumbnail: 'images/t1.png', title: 'Posting Job Openings', description: 'Learn how to create and manage job postings effectively.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t2.png', title: 'Tracking Applications', description: 'Best practices for tracking candidate applications in ATS.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t3.png', title: 'Interview Feedback', description: 'How to use the interview feedback system for evaluations.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t4.png', title: 'Automating Responses', description: 'Set up and manage automated email responses in ATS.', tags: ['PROJECT TIPS'] },
    ],
    Finance: [
      { thumbnail: 'images/t1.png', title: 'Generating Financial Reports', description: 'Learn how to create and analyze financial reports.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t2.png', title: 'Managing Payments', description: 'Understand supported payment methods and recurring payments.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t3.png', title: 'Updating Billing Information', description: 'Step-by-step guide to updating billing information in the Finance module.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t4.png', title: 'Disputing Charges', description: 'Learn how to dispute charges effectively in the Finance system.', tags: ['PROJECT TIPS'] },
    ],
    HR: [
      { thumbnail: 'images/t1.png', title: 'Leave Policies Overview', description: 'Comprehensive guide on the leave policies in the HR module.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t2.png', title: 'Submitting Leave Requests', description: 'Learn how to submit and track your leave requests.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t3.png', title: 'Accessing Payslips', description: 'Guide on how to view and download payslips from the HR system.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t4.png', title: 'Grievance Redressal', description: 'Learn the process for reporting and resolving grievances.', tags: ['PROJECT TIPS'] },
    ],
    CRM: [
      { thumbnail: 'images/t1.png', title: 'Managing Accounts', description: 'Best practices for managing accounts in the CRM module.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t2.png', title: 'Customizing Columns', description: 'Learn how to customize visible columns in the Accounts section.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t3.png', title: 'Opportunity Tracking', description: 'A guide to tracking opportunities and managing pipelines.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t4.png', title: 'Creating Quotes', description: 'Learn how to create and manage quotes in the CRM system.', tags: ['PROJECT TIPS'] },
    ],
    Timesheet: [
      { thumbnail: 'images/t1.png', title: 'Logging Work Hours', description: 'Step-by-step guide to logging and tracking work hours.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t2.png', title: 'Editing Timesheets', description: 'Learn how to edit and update locked timesheets.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t3.png', title: 'Daily Log Reports', description: 'Understand how to generate and analyze daily log reports.', tags: ['PROJECT TIPS'] },
      { thumbnail: 'images/t4.png', title: 'Removing Tasks', description: 'Learn how to remove tasks from timesheets effectively.', tags: ['PROJECT TIPS'] },
    ],
  };
  
$scope.videos = [].concat(...Object.values($scope.moduleVideos)); 

$scope.videosPerPage = 12;
$scope.currentPage = 0; 
$scope.paginatedVideos = []; 

$scope.totalPages = function () {
  let videos = [];
  if ($scope.selectedModule) {
    videos = $scope.moduleVideos[$scope.selectedModule] || [];
  } else {
    videos = [].concat(...Object.values($scope.moduleVideos)); 
  }
  return Math.ceil(videos.length / $scope.videosPerPage);
};

$scope.updatePaginatedVideos = function () {
  let videos = [];
  if ($scope.selectedModule) {
    videos = $scope.moduleVideos[$scope.selectedModule] || [];
  } else {
    videos = [].concat(...Object.values($scope.moduleVideos)); 
  }
  const start = $scope.currentPage * $scope.videosPerPage;
  const end = start + $scope.videosPerPage;
  $scope.paginatedVideos = $scope.videos.slice(start, end); 
};

$scope.updatePagination = function () {
  const totalPages = $scope.totalPages();
  $scope.pagination = [];
  $scope.pagination.push({ label: '«', action: 'first', disabled: $scope.currentPage === 0 });
  $scope.pagination.push({ label: '‹', action: 'prev', disabled: $scope.currentPage === 0 });

  const maxVisiblePages = 3; 
  const totalVisiblePages = 10; 

  $scope.pagination.push({ label: 1, action: 0, active: $scope.currentPage === 0 });

  if ($scope.currentPage > maxVisiblePages) {
    $scope.pagination.push({ label: '...', action: null });
  }
  const start = Math.max(1, $scope.currentPage - 1); 
  const end = Math.min(totalPages - 1, $scope.currentPage + 1); 
  for (let i = start; i <= end; i++) {
    $scope.pagination.push({ label: i + 1, action: i, active: $scope.currentPage === i });
  }
  if ($scope.currentPage < totalPages - maxVisiblePages - 1) {
    $scope.pagination.push({ label: '...', action: null });
  }
  if (totalPages > 1) {
    $scope.pagination.push({ label: totalPages, action: totalPages - 1, active: $scope.currentPage === totalPages - 1 });
  }
  $scope.pagination.push({ label: '›', action: 'next', disabled: $scope.currentPage === totalPages - 1 });
  $scope.pagination.push({ label: '»', action: 'last', disabled: $scope.currentPage === totalPages - 1 });
};

$scope.goToPage = function (action) {
  const totalPages = $scope.totalPages();

  if (action === 'first') {
    $scope.currentPage = 0;
  } else if (action === 'last') {
    $scope.currentPage = totalPages - 1;
  } else if (action === 'prev') {
    $scope.currentPage = Math.max(0, $scope.currentPage - 1);
  } else if (action === 'next') {
    $scope.currentPage = Math.min(totalPages - 1, $scope.currentPage + 1);
  } else if (typeof action === 'number') {
    $scope.currentPage = action;
  }
  $scope.updatePaginatedVideos(); 
  $scope.updatePagination(); 
};
$scope.onModuleChange = function (module) {
  $scope.selectedModule = module; 
  $scope.currentPage = 0; 
  $scope.updatePaginatedVideos();
  $scope.updatePagination();
};

$scope.updatePaginatedVideos();
$scope.updatePagination();

/* ........................................................................................................................*/
  
$scope.openAddVideoDialog = function () {
  $scope.newVideo = {
    question: '',
    description: '',
    module: $scope.selectedModule || 'Projects',
    videoFile: null,
    thumbnailFile: null,
    tags: '', 
  };
  $scope.showAddVideoDialog = true;
};

$scope.postVideo = function () {
  if ($scope.newVideo.question && $scope.newVideo.description && $scope.newVideo.tags) {
    $scope.moduleVideos[$scope.newVideo.module] = $scope.moduleVideos[$scope.newVideo.module] || [];
    $scope.moduleVideos[$scope.newVideo.module].push({
      thumbnail: 'images/t1.png', 
      title: $scope.newVideo.question,
      description: $scope.newVideo.description,
      tags: $scope.newVideo.tags.split(',').map(tag => tag.trim()), 
    });

    $scope.updateVideos();

    $scope.closeAddVideoDialog();
    $scope.showSuccessDialog = true; 
  } else {
    alert('Please fill in all the fields.');
  }
};

$scope.updateVideos = function () {
  $scope.videos = $scope.selectedModule
    ? $scope.moduleVideos[$scope.selectedModule] || []
    : [].concat(...Object.values($scope.moduleVideos)); 
  $scope.updatePaginatedVideos(); 
  $scope.updatePagination(); 
};

$scope.moduleList = ['Projects', 'ATS', 'Timesheet', 'Finance', 'CRM', 'HR'];

$scope.$watch('selectedModule', function () {
  $scope.updateVideos();
});

$scope.updatePaginatedVideos();
$scope.updatePagination();

  $scope.closeAddVideoDialog = function () {
    $scope.showAddVideoDialog = false;
  };
  $scope.closeSuccessDialog = function () {
    $scope.showSuccessDialog = false;
  };

/* --------------------------------------------------------------------------------------------------------------------------------------------*/

$scope.showNotificationDialog = false; 
$scope.activeTab = 'request'; 

$scope.openNotificationDialog = function () {
  $scope.showNotificationDialog = true;
};

$scope.closeNotificationDialog = function () {
  $scope.showNotificationDialog = false;
};

$scope.changeTab = function (tab) {
  $scope.activeTab = tab;
};

/* --------------------------------------------------------------------------------------------------------------------------------------------*/

$scope.showDeleteDialog = false;
$scope.videoToDeleteIndex = null;

$scope.openDeleteDialog = function (index) {
  $scope.showDeleteDialog = true;
  $scope.videoToDeleteIndex = index; 
};

$scope.confirmDelete = function () {
  console.log("Before deletion:");
  console.log("Paginated Videos:", $scope.paginatedVideos);
  console.log("Video To Delete Index:", $scope.videoToDeleteIndex);
  console.log("Videos:", $scope.videos);

  if ($scope.paginatedVideos && $scope.videos && $scope.videoToDeleteIndex !== null) {
    
    $scope.paginatedVideos.splice($scope.videoToDeleteIndex, 1);
    const videoIndex = $scope.currentPage * $scope.videosPerPage + $scope.videoToDeleteIndex;
    if (videoIndex >= 0 && videoIndex < $scope.videos.length) {
      $scope.videos.splice(videoIndex, 1); // Remove from the main videos list
    }
    $scope.updatePaginatedVideos();

    console.log("After deletion:");
    console.log("Paginated Videos:", $scope.paginatedVideos);
    console.log("Videos:", $scope.videos);
  } else {
    console.error("Deletion failed: paginatedVideos or videos is undefined, or invalid index.");
  }

  $scope.showDeleteDialog = false;
  $scope.videoToDeleteIndex = null;
};

$scope.cancelDelete = function () {
  $scope.showDeleteDialog = false;
  $scope.videoToDeleteIndex = null;
};

/* ################################################################## */


});
