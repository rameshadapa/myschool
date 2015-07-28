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
	},
	inpSchoolType: {
	  validators: {
	    notEmpty: {
		message: 'The school type is required and cannot be empty'
	    }
	  }
	},
	inpaddrlane1: {
	  validators: {
	    notEmpty: {
		message: 'The lane one address is required and cannot be empty'
	    }
	  }
	},
	inpaddrlane2: {
	  validators: {
	    notEmpty: {
		message: 'The lane two address is required and cannot be empty'
	    }
	  }
	},
	inpcity: {
	  validators: {
	    notEmpty: {
		message: 'The city is required and cannot be empty'
	    }
	  }
	},
	inpstate: {
	  validators: {
	    notEmpty: {
		message: 'The state is required and cannot be empty'
	    }
	  }
	},
	inpphone: {
	  validators: {
	    notEmpty: {
		message: 'The phone number is required and cannot be empty'
	    },
	    stringLength: {
		min: 10,
		max: 13,
		message: 'The phone number must be below 10-13 characters length.'
	    }
	  }
	},
	inpEmail: {
	  validators: {
	    notEmpty: {
		message: 'The email is required and cannot be empty'
	    },
	    emailAddress: {
		message: 'The email address is not valid.'
	    }
	  }
	},
	inpoverview: {
	  validators: {
	    notEmpty: {
		message: 'The overview is required and cannot be empty'
	    }
	  }
	}
    }
  });
});
