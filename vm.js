let fs=require('fs');


let mem=new Array();
let ip=0;
intext=fs.readFileSync('text.spml');
intext=intext.toString();

mem=intext.split(/ |\r\n/);

function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (y==0) return x;
	return NOD(y, x % y);
}

while(mem[ip]!='exit')
	switch(mem[ip]){
		case 'nok':
			mem[parseInt(mem[ip+1])]=(parseInt(mem[ip+2])*parseInt(mem[ip+3]))/NOD(parseInt(mem[ip+2]),parseInt(mem[ip+3]));
			ip+=4;
			break
		case 'fib':
			let fib=new Array();
			let last1=1;
			let last2=1;
			let last3=2;
			fib.push(last1);
			fib.push(last2);
			while(fib.length!=parseInt(mem[ip+2])){
				fib.push(last1+last2)
				last3=last1+last2
				last1=last2;
				last2=last3
			}
			mem[parseInt(mem[ip+1])]=fib[fib.length-1]
			ip+=3;
			break
		case 'set':
			mem[parseInt(mem[ip+1])]=parseInt(mem[ip+2]);
			ip+=3;
			break
		case 'output':
			console.log(mem[parseInt(mem[ip+1])]);
			ip+=2;
			break
		case 'add':
			mem[parseInt(mem[ip+3])]=mem[parseInt(mem[ip+1])]+mem[parseInt(mem[ip+2])];
			ip+=4;
			break
	}