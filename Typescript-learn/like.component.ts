export class LikeComponent{

    constructor(public count: number, public selected: boolean)
    {

    }

    onclick(){
            // if(this.selected)
            // {
            //     this.count--;
            //     this.selected=false;
            // }
            // else{
            //     this.count++;
            //     this.selected=true;
            // }

            this.count += (this.selected)? 1 : -1;

            this.selected = !this.selected;
    }
}