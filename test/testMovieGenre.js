const movieGenre = require('../js/movieGenre').movieGenre;
const assert = require('assert');

function createMovie(){
    return new Movie();
}

function test_constructor(){
    let m = createMovie();
    assert.deepEqual(m.uuid, "");
}

function test_addRelatedMovie(m){
    let m = createMovie();
    let arm = m.addRelatedMovie(m);
    assert.equal(typeof(arm), 'boolean');
}

function test_setGenre(g){
    let m = createMovie();
    let sg = m.setGenre(g);
    assert.equal(typeof(sg), 'boolean');
}

function createGenre(){
    return new Genre();
}

function test_GConstructor(){
    let g = createGenre();
    assert.deepEqual(g.name, "");
}

function test_addMovie(m){
    let g = createGenre();
    let am = g.addMovie(m);
    assert.equal(typeof(am), 'boolean');
}

const testFunctions = [
    test_constructor,
    test_addRelatedMovie,
    test_setGenre,
    test_GConstructor,
    test_addMovie
].forEach(func =>{
    func.call();
});
