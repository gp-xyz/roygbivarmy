class GCircle {
    constructor(x,y,r,colo,tn)
    {
        this.x = x;
        this.y=y;
        this.r =r ;
        this.colo = colo;
        this.tn = tn;
        this.counter=0;

    }
    show(){
        fill(this.colo);
        circle(this.x,this.y,this.r);
        this.counter++;
    }
    move(){
        this.y = this.y + 5;
        if (this.y > height )
        {
            this.y = this.y-height;
            this.x = this.x+40;
            if (this.x > width )
            {
                this.x = this.x-width;
                // this.x = this.x+40;
                // noLoop();
            }
            // noLoop();
        }
        else if ( this.y < 0)
        {
            // this.y = height+this.y;

        }
        if ( this.x < 0)
        {
            this.x = width;

        }


        var mynoise = noise(this.counter*.02);
        var xchange = map(mynoise,0,1,-9,9);
        this.x = this.x + xchange;

        
    }
}