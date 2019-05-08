{
    //由八分之一圆弧扩展到整个圆弧
    let toAllCircle = function(points)
    {
        var temp = points.slice(0);
        points.forEach(p=>{
            temp.push({x:p.y,y:p.x});
        });
        points = temp.slice(0);
        points.forEach(p=>{
            temp.push({x:p.x,y:-p.y});
        });
        points = temp.slice(0);
        points.forEach(p=>{
            temp.push({x:-p.x,y:p.y});
        });
        return temp;
    }

    let zCricle_zhongDian = function(o,r,res=[]){
        //首先看作圆心为(0,0)的圆，运算出点之后加上真正的圆心偏移量 d为顶点向右第一个点的判定表达式
        //每次判断两个候选点中点与圆的位置关系 e= 4*d
        var x=0,y=r,d=1.25-r,e=5-4*r;
        res.push({x,y});
        while(x<=y)
        {
            if(e<0)
            {
                e+=8*x+12;
            }
            else
            {
                e+=8*(x-y)+20;y--;
            }
            x++;
            res.push({x,y});
        }
        res = toAllCircle(res);
        res.forEach(p=>{
            p.x+=o.x;
            p.y+=o.y;
        })
        return res;
    };
    /**
     * @methid 绘制圆的方法
     * @param {*} o 
     * @param {*} r 
     * @param {*} color 
     * @param {*} res 
     */
    function drawCircle(o,r,color)
    {
        o = toP(o);
        var fun = zCricle_zhongDian;
        var points = fun(o,r);
        points.forEach(p=>{
            draw(p,color);
        })
    }
    function drawRect(startP,w,h,color,res=[])
    {
        return res;
    }
    function drawPolygon(points,color,res=[])
    {
        return res;
    }
}