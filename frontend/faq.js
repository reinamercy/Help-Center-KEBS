const adminApp = angular.module('adminApp', []);

adminApp.controller('AdminController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {
  $scope.selectedApp = 'Projects'; // Default selected app
  $scope.faqs = []; // Initialize FAQs
  $scope.paginatedFaqs = []; // Store paginated FAQs
  $scope.modules = ['Projects', 'ATS', 'Timesheets', 'Finance', 'CRM', 'HR']; // Available modules
  $scope.faqsPerPage = 10; // FAQs per page
  $scope.currentPage = 0; // Default page

  // Load FAQs and filter by selected module
  $scope.loadFAQs = function () {
    const selectedModule = $scope.selectedApp || 'All Modules';

    $http.get('/api/faqs')
      .then(({ data }) => {
        console.log('API Response:', data);
        console.log('Selected Module:', selectedModule);

        // Filter FAQs dynamically based on the selected module
        $scope.faqs = selectedModule === 'All Modules'
          ? data
          : data.filter(faq => faq.module === selectedModule);

        console.log('Filtered FAQs:', $scope.faqs);

        // Update paginated FAQs
        $scope.updatePaginatedFaqs();
        $scope.updatePagination();
      })
      .catch(err => {
        console.error('Error loading FAQs:', err.message);
      });
  };

  // Handle module change
  $scope.onModuleChange = function (module) {
    $scope.selectedApp = module; // Update selected module
    $scope.currentPage = 0; // Reset to first page
    $scope.loadFAQs(); // Reload FAQs for the selected module
  };

  // Update paginated FAQs
  $scope.updatePaginatedFaqs = function () {
    const start = $scope.currentPage * $scope.faqsPerPage;
    const end = start + $scope.faqsPerPage;
    $scope.paginatedFaqs = $scope.faqs.slice(start, end); // Paginate FAQs
  };

  // Update pagination controls
  $scope.updatePagination = function () {
    const totalPages = Math.ceil($scope.faqs.length / $scope.faqsPerPage);
    $scope.pagination = [];

    // Add "First" and "Previous" buttons
    $scope.pagination.push({ label: '«', action: 0, disabled: $scope.currentPage === 0 });
    $scope.pagination.push({ label: '‹', action: Math.max(0, $scope.currentPage - 1), disabled: $scope.currentPage === 0 });

    // Add page numbers
    for (let i = 0; i < totalPages; i++) {
      $scope.pagination.push({ label: i + 1, action: i, active: $scope.currentPage === i });
    }

    // Add "Next" and "Last" buttons
    $scope.pagination.push({ label: '›', action: Math.min(totalPages - 1, $scope.currentPage + 1), disabled: $scope.currentPage === totalPages - 1 });
    $scope.pagination.push({ label: '»', action: totalPages - 1, disabled: $scope.currentPage === totalPages - 1 });
  };

  // Change page
  $scope.goToPage = function (page) {
    if (page >= 0 && page < Math.ceil($scope.faqs.length / $scope.faqsPerPage)) {
      $scope.currentPage = page;
      $scope.updatePaginatedFaqs(); // Update displayed FAQs
      $scope.updatePagination(); // Update pagination controls
    }
  };

  // Toggle FAQ visibility
  $scope.toggleFaq = function (index) {
    if ($scope.paginatedFaqs[index]) {
      $scope.paginatedFaqs[index].show = !$scope.paginatedFaqs[index].show;
    }
  };

  // Load FAQs on initialization
  $scope.loadFAQs();

  $scope.openDialog = function () {
    $scope.showDialog = true; // Show the add FAQ dialog
    $scope.newFaq = { question: '', answer: '', module: $scope.modules[0] }; // Reset new FAQ object
    document.getElementById('editor-container').innerHTML = ''; // Clear the editor content
  };

  $scope.openEditDialog = function (faq) {
    $scope.showEditDialog = true;
    $scope.faqToEdit = angular.copy(faq);  // Make a copy to avoid modifying the original object
  
    // Pre-fill the dialog with FAQ details
    $scope.newFaq = {
      question: faq.question,
      answer: faq.answer,
      module: faq.module,
    };
  
    // Prefill the editor content
    $timeout(() => {
      document.getElementById("editor-container").innerHTML = faq.answer || ''; 
    });
  };
  
  // Save the updated FAQ
  $scope.saveEditFaq = function () {
    // Sync description from the editor
    $scope.syncDescription();
  
    if ($scope.newFaq.question && $scope.newFaq.answer) {
      // Send the updated FAQ to the backend
      $http.put(`/api/faqs/${$scope.faqToEdit.id}`, $scope.newFaq)
        .then((response) => {
          console.log("FAQ updated successfully:", response.data);
          
          // Update the FAQ in the UI by finding its index in the list
          const index = $scope.faqs.findIndex(f => f.id === $scope.faqToEdit.id);
          if (index !== -1) {
            $scope.faqs[index] = angular.copy($scope.newFaq);  // Update FAQ in the local array
          }
  
          // Hide the edit dialog and show success message
          $scope.showEditDialog = false;
          $scope.showSuccessDialog = true;
          $timeout(() => {
            $scope.showSuccessDialog = false;  // Hide success dialog after 3 seconds
          }, 3000);
        })
        .catch((err) => {
          console.error("Error updating FAQ:", err);
          alert("Error updating FAQ: " + err.message);
        });
    } else {
      alert("Please fill in all fields.");
    }
  };
  
  // Synchronize editor content with the model
  $scope.syncDescription = function () {
    const editor = document.getElementById("editor-container");
    $scope.newFaq.answer = editor.innerHTML.trim();  // Sync editor content to the model
  };

  // Sync description content for adding new FAQ
  $scope.syncDescription = function () {
    const editor = document.getElementById('editor-container');
    $scope.newFaq.answer = editor.innerText.trim(); // Update newFaq.answer with the content of the editor
  };

  // Add FAQ logic
  $scope.addFaq = function () {
    $scope.syncDescription(); // Ensure the description is synced before validation

    if ($scope.newFaq && $scope.newFaq.question && $scope.newFaq.answer) {
      $http.post('/api/faqs', $scope.newFaq)
        .then(() => {
          $scope.showDialog = false; // Close the add dialog
          $scope.loadFAQs(); // Refresh FAQs from the backend
          $scope.showSuccessDialog = true; // Show success dialog
          $timeout(() => {
            $scope.showSuccessDialog = false; // Hide success dialog after timeout
          }, 3000);
        })
        .catch(err => {
          console.error('Error adding FAQ:', err.message);
          alert('Error adding FAQ.');
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  $scope.openDeleteDialog = function (faq) {
    $scope.faqToDelete = faq; // Store the FAQ to be deleted
    $scope.showDeleteDialog = true; // Show the delete dialog
  };

  $scope.confirmDelete = function () {
    console.log('Deleting FAQ with ID:', $scope.faqToDelete.id); // Log to confirm which FAQ is being deleted
    if ($scope.faqToDelete && $scope.faqToDelete.id) {
      $http.delete(`/api/faqs/${$scope.faqToDelete.id}`)
        .then(() => {
          // After successful deletion, update the UI
          const faqIndex = $scope.faqs.findIndex(f => f.id === $scope.faqToDelete.id); // Find the index of the deleted FAQ
          if (faqIndex !== -1) {
            $scope.faqs.splice(faqIndex, 1); // Remove it from the list
          }

          $scope.loadFAQs(); // Refresh the FAQ list if needed
          $scope.showDeleteDialog = false; // Hide the delete dialog
          $scope.faqToDelete = null; // Clear the selected FAQ
        })
        .catch(err => {
          console.error('Error deleting FAQ:', err.message);
          alert('Error deleting FAQ.');
        });
    } else {
      console.error('No FAQ selected for deletion');
    }
  };

  // Cancel the deletion and close the dialog
  $scope.cancelDelete = function () {
    $scope.showDeleteDialog = false; // Hide the delete dialog
    $scope.faqToDelete = null; // Reset the FAQ to be deleted
  };

  // Load FAQs on initialization
  $scope.loadFAQs();

  // Close the success dialog
  $scope.closeSuccessDialog = function () {
    $scope.showSuccessDialog = false; // Hide the success dialog
  };

  // Close all dialogs
  $scope.closeDialog = function () {
    $scope.showDialog = false;
    $scope.showEditDialog = false;
    $scope.showSuccessDialog = false;
    $scope.newFaq = { question: '', answer: '', module: $scope.modules[0] }; // Reset all fields
  };

  /* ################################################################################################### */

  // Pagination logic
  $scope.totalPages = function () {
    const faqs = $scope.selectedApp
      ? $scope.faqs[$scope.selectedApp] || []
      : [].concat(...Object.values($scope.faqs)); // Combine all FAQs if no module is selected
    return Math.ceil(faqs.length / $scope.faqsPerPage);
  };

  
  // Load FAQs on initialization
  $scope.loadFAQs();
  $scope.updatePaginatedFaqs();
  $scope.updatePagination();
}]);
