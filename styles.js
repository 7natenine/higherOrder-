function repeat(fn,n){ 
    for (let x = 0; x < n; x++){
        fn();
    }
}

function hello(){
    console.log('Hello World');
}

function goodbye(){
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

