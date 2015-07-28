$(document).ready(function() {
  $('#schoolInsForm').bootstrapValidator({
    icons: {
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
		message: 'The phone number must not be below 10 characters length.'
	    },
	    regexp: {
		message: 'The phone number can only contains the digits, -, (, ), +',
		regexp: /^[0-9\s\-()+\.]+$/
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
	},
	inpAnualFee: {
	  validators: {
	    notEmpty: {
		message: 'The anual fee is required and cannot be empty'
	    }
	  }
	}
    }
  });
});
