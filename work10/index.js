function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for (let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}

function stat(){
    let str = document.getElementById("str").value
    let obj = {}
    for(var i=0;i<str.length;i++){
        var key=str.charAt(i);
        if(obj[key]){
            ++obj[key];
        }else{
            obj[key]=0;
            ++obj[key];
        }
    }
    var arr=[];
    for(var j in obj){
        arr.push(obj[j]);
    
    }
    console.log(arr);
    document.getElementById('result').innerText = JSON.stringify(obj)
}