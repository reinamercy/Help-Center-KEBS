angular.module('videoApp', []).controller('VideoController', ['$scope', '$window', function($scope, $window) {
    
    $scope.userName = 'John Doe'; // Dynamic user name

    // Sample video data
    $scope.videoCards = [
        {
            title: 'Scheduling Interviews and Managing Calendars',
            description: 'See examples and get best practices for building dashboards',
            thumbnail: 'video-thumbnail-1.png',
            category: 'ATS'
        },
        {
            title: 'Projects Custom fields in dashboards and reports',
            description: 'See examples and get best practices for building dashboards',
            thumbnail: 'video-thumbnail-2.png',
            category: 'Projects'
        },
        {
            title: 'Projects Custom fields in dashboards and reports (Timesheet)',
            description: 'See examples and get best practices for building dashboards',
            thumbnail: 'video-thumbnail-3.png',
            category: 'Timesheet'
        }
    ];
    $scope.navigateToVideoPage = function(title, description, thumbnail, category) {
        const queryParams = new URLSearchParams({
            title: title,
            description: description,
            thumbnail: `images/${thumbnail}`,
            category: category // Ensure category is passed
        }).toString();
        $window.location.href = `video_details.html?${queryParams}`;
    };
    
    $scope.watchAllVideos = function(event) {
        event.preventDefault();
        $window.location.href = 'watch_all_videos.html';
    };
}]);
