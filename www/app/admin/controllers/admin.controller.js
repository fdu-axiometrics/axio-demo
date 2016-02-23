(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger','$state', 'routerHelper'];
    /* @ngInject */
    function AdminController(logger, $state, routerHelper) {
        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            logger.info('Activated Admin View');
        }

        vm.rental = {};

        // An array of our form fields with configuration
        // and options set. We make reference to this in
        // the 'fields' attribute on the  element
        vm.rentalFields = [
            {
                key: 'first_name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'First Name',
                    placeholder: 'Enter your first name',
                    required: true
                }
            },
            {
                key: 'last_name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Last Name',
                    placeholder: 'Enter your last name',
                    required: true
                }
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email address',
                    placeholder: 'Enter email',
                    required: true
                }
            },
            {
                key: 'under25',
                type: 'checkbox',
                templateOptions: {
                    label: 'Are you under 25?',
                },
                // Hide this field if we don't have
                // any valid input in the email field
                hideExpression: '!model.email'
            },
            {
                key: 'province',
                type: 'select',
                templateOptions: {
                    label: 'Province/Territory',
                    // Call our province service to get a list
                    // of provinces and territories
                    options: getProvinces()
                },
                hideExpression: '!model.email'
            },
            {
                key: 'insurance',
                type: 'input',
                templateOptions: {
                    label: 'Insurance Policy Number',
                    placeholder: 'Enter your insurance policy number'
                },
                hideExpression: '!model.under25 || !model.province',
            },
            {
                key: 'license',
                type: 'input',
                templateOptions: {
                    label: 'Driver\'s License Number',
                    placeholder: 'Enter your drivers license number'
                },
                hideExpression: '!model.province',
                validators: {
                    // Custom validator to check whether the driver's license
                    // number that the user enters is valid or not
                    driversLicense: function($viewValue, $modelValue, scope) {
                        var value = $modelValue || $viewValue;
                        if(value) {
                            // call the validateDriversLicense function
                            // which either returns true or false
                            // depending on whether the entry is valid
                            return validateDriversLicence(value)
                        }
                    }
                },
                expressionProperties: {
                    // We currently only have a driver's license pattern for Ontario
                    // so we need to disable this field if we've picked a province/territory
                    // other than Ontario
                    'templateOptions.disabled': function($viewValue, $modelValue, scope) {
                        if(scope.model.province === 'ontario') {
                            return false;
                        }
                        return true;
                    }
                }
            },
        ];

        function validateDriversLicence(value) {
            return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
        };
        function getProvinces() {
            return [
                {
                    "name": "Alberta",
                    "value": "alberta"
                },
                {
                    "name": "British Columbia",
                    "value": "british_columbia"
                },
                {
                    "name": "Manitoba",
                    "value": "manitoba"
                },
                {
                    "name": "New Brunswick",
                    "value": "new_brunswick"
                },
                {
                    "name": "Newfoundland and Labrador",
                    "value": "newfoundland_and_labrador"
                },
                {
                    "name": "Northwest Territories",
                    "value": "northwest_territories"
                },
                {
                    "name": "Nova Scotia",
                    "value": "nova_scotia"
                },
                {
                    "name": "Nunavut",
                    "value": "nunavut"
                },
                {
                    "name": "Ontario",
                    "value": "ontario"
                },
                {
                    "name": "Prince Edward Island",
                    "value": "prince_edward_island"
                },
                {
                    "name": "Quebec",
                    "value": "quebec"
                },
                {
                    "name": "Saskatchewan",
                    "value": "saskatchewan"
                },
                {
                    "name": "Yukon",
                    "value": "Yukon"
                }
            ];
        }
    }
})();
