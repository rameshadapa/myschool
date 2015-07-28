$(document).ready(function() {
  $('#schoolInsForm').bootstrapValidator({
    container: '#messages',
    feedbackIcons: {
	valid: 'glyphicon glyphicon-ok',
	invalid: 'glyphicon glyphicon-remove',
	validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
	inpSchoolName: {
	  validators: {
	    notEmpty: {
		message: 'The school name is required and cannot be empty'
	    }
	  }
	}
    }
  });
});
