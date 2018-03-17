class Movie {
    constructor(){
        this.uuid = "";
        this.title = "";
        this.year = "";
        this.genres = null;
        this.related = [];   
    }
   addRelatedMovie(m){
        if(m instanceof Movie){
            this.related.push(m);
            return true;
        }
        return false;
    }
    setGenre(g){
        if(g instanceof Genre){
           this.genres = g;
           g.addMovie(this);
           return true;
        }
        return false;
    }

}

class Genre{
    constructor(){
        this.name = "";
        this.movies = [];
    }
    addMovie(m){
        if(m instanceof Movie){
            this.movies.push(m);
            return true;
        }
        return false;
    }
}


