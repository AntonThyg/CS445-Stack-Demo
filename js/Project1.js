//Node object
var Node = function(number){
	var node=new Object();
	node.next=null;
	node.element=number;
	return node;
}

//Stack object
var Stack=function(){
	//1:private instance variable
	var stack=new Object();
	stack.count=0;
	stack.top=null;
	
	//2:Accessor methods
	
	//toString method
	stack.toString=function(){
		var result="";
		var current=stack.top;
		while(current!=null){
			result+=current.element+"\n";
			current=current.next;
		}
		
		return result;
	}
	
	//push method
	stack.push=function(number){
		var newNode = new Node(number);
		if(stack.count!=0){
			newNode.next=stack.top;
		}
		stack.top=newNode;
		stack.count++;
	}
	//pop method
	stack.pop=function(){
		var result = "The stack is empty";
		if(!stack.isEmpty()){
			result="Pop: "+stack.top.element;
			stack.top=stack.top.next;
			stack.count--;
		}
		return result;
			
	}
	//peek method
	stack.peek=function(){
		var result = "The stack is empty";
		if(!stack.isEmpty()){
			result="Peek: "+stack.top.element;
		}
		return result;
	}
	//size method
	stack.size=function(){
		return stack.count;
	}
	//isEmpty method
	stack.isEmpty=function(){
		if(stack.count>0){
			return false;
		}else{
			return true;
		}
	}

	stack.clear=function(){
		stack.top=null;
		stack.count=0;
	}
	
	return stack;
}

var s1=new Stack();

refreshStack=function(){
	$('#showStack').val(s1.toString);
}

push=function(){
	var input=$('#inputNumber').val();
	if(input!=""){
		s1.push(input);
		refreshStack();
		$('#inputNumber').val("");
		$('#showLog').val(input+" was pushed into the stack!\n"+$('#showLog').val());
	}else{
		$('#showLog').val("You cannot push an empty value to stack!\n"+$('#showLog').val());
	}
}

pop=function(){
	$('#showLog').val(s1.pop()+"\n"+$('#showLog').val());
	refreshStack();
}

peek=function(){
	$('#showLog').val(s1.peek()+"\n"+$('#showLog').val());
}

size=function(){
	$('#showLog').val("Size: "+s1.size()+"\n"+$('#showLog').val());
}

isEmpty=function(){
	if(s1.isEmpty()){
		$('#showLog').val("The stack is empty!\n"+$('#showLog').val());
	}else{
		$('#showLog').val("The stack isn't empty!\n"+$('#showLog').val());
	}
}

clearStack=function(){
	s1.clear();
	refreshStack();
}

clearLog=function(){
	$('#showLog').val("");
}


$('#btnPush').click(function(){
	push();
});

$('#btnPop').click(function(){pop();});

$('#btnPeek').click(function(){peek();});

$('#btnSize').click(function(){size();});

$('#btnIsEmpty').click(function(){isEmpty();});

$('#menuPop').click(function(){pop();});
$('#menuPeek').click(function(){peek();});
$('#menuSize').click(function(){size();});
$('#menuIsEmpty').click(function(){isEmpty();});
$('#menuClearStack').click(function(){clearStack();});
$('#menuClearLog').click(function(){clearLog()});

//check if user has already been notified required.
var warningDisplayed = false;

$(document).ready(function(){

    //Keyboard Shortcuts
	$(document).on('keydown', function(e){
        if(e.altKey && e.key === 'o'){
            pop();
        }else if(e.altKey && e.key === 'e'){
            peek();
        }else if(e.altKey && e.key === 's'){
            size();
        }else if(e.altKey && e.key === 'm'){
            isEmpty();
        }else if(e.altKey && e.key === 'c'){
            clearLog();
        }else if(e.altKey && e.key === 'x'){
			/*	I couldn't get ctrl alt c to work.
				When I looked into it it said that it is reserved by the browser.*/
            clearStack();	
        }
    });

	//notify required field (only notifies if the stack is empty)
	$('#inputNumber').on('blur', function(){
		var $input = $(this);
		var $formGroup = $input.closest('.form-group');
		
		if (!warningDisplayed) {
			$formGroup.removeClass('has-error');
			$('.error').remove();
	
			if ($input.val() === '' && s1.isEmpty()) {
				$formGroup.addClass('has-error');
				$input.after("<div class='error'>This field is required!</div>");
				$input.focus();
				warningDisplayed=true;
			}
		}
	});

	$('#inputNumber').on('focus',function(){
		var $input = $(this);
		var $formGroup = $input.closest('.form-group');
		if(warningDisplayed){
			$formGroup.removeClass('has-error');
			$('.error').remove();
			warningDisplayed=false;
		}
	});
});



