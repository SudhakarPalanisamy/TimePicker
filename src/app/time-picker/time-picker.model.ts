export class AppTime{

    private hours: number;
    private minutes: number;
    private meridian: boolean = false;

    private static padTime = (i: number): string => i<10 ? `0${i}` :`${i}`;

    getHours():string{
        if(this.hours == null)
            return '';

        let returnVal = '';
        if(this.hours > 0 && this.hours <= 12){
            returnVal = this.hours.toString();
        }
        else if(this.hours > 12 && this.hours < 24){
            returnVal = (this.hours - 12).toString();
        }
        else if(this.hours == 0){
            returnVal = "12";
        }

        return returnVal;
    }

    getHours24():string{
        let convertedHour = 0;
        if(this.hours == null){
            return '';
        }else{
           
            if(this.hours == 12){
                convertedHour = this.meridian ? 12 : 0;
            }else{
                convertedHour = this.meridian ? this.hours  + 12 : this.hours; 
            }
        }

        return AppTime.padTime(convertedHour);
    }

    getMinutes(): string{
        if(this.minutes == null)
            return '';
        else
            return AppTime.padTime(this.minutes);
    }

    getMeridian(): string{
        return this.meridian ? "PM" : "AM";
    }

    setHours(hoursInputStr: string){
        if(hoursInputStr == ''){
            this.hours = null;
            return;
        }

        let hourInput = Number.parseInt(hoursInputStr);

        if(isNaN(hourInput) || hourInput < 0 || hourInput > 23){
            this.hours = null;
            return;
        }

        if(hourInput > 0 && hourInput < 12){
            this.hours = hourInput;
        }else if(hourInput > 12){
            this.hours = hourInput - 12;
            this.meridian = true;
        }else if(hourInput == 12){
            this.hours =12;
            this.meridian = true;
        }else if(hourInput == 0){
            this.hours = 12;
            this.meridian = false;
        }
    }

    setMinutes(minutesInputStr: string){
        if(minutesInputStr == ''){
            this.minutes = null;
            return;
        }

        let minuteInput = Number.parseInt(minutesInputStr);

        if(isNaN(minuteInput) || minuteInput < 0 || minuteInput > 59){
            this.minutes = null;
            return;
        }

        this.minutes = minuteInput;
    }

    toggleMeridian(){
        this.meridian = !this.meridian;
    }

    static fromString(inputString: string): AppTime{
        
        let varappTime = new AppTime;
        if(inputString){
            const split = inputString.split(':');
            varappTime.setHours(split[0]);
            varappTime.setMinutes(split[1]);
        }
        
        return varappTime;
    }

    toString(): string{
        if(this.hours != null && this.hours != undefined && this.minutes != null && this.minutes != undefined){
            return `${this.getHours24()}:${this.getMinutes()}:00`
        }
        else
            return '';
    }

    toDisplayString():string{
        if(this.hours != null && this.hours != undefined && this.minutes != null && this.minutes != undefined){
            return `${this.getHours()}:${this.getMinutes()} ${this.getMeridian()}`
        }
        else
            return '';

    }
}