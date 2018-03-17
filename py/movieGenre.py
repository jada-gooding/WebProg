class Movie:
    def __init__(self):
        self.uuid = ""
        self.title = ""
        self.year = ""
        self.genres = None
        self.related = []

    def addRelatedMovie(self, m):
        if isinstance(m, Movie):
            related.append(m)
            return true
        return false

    def setGenre(self, g):
        if isinstance(g, Genre):
            genres = g
            g.addMovie(self)
            return true
        return false

class Genre:
    def __init__(self):
        self.name = ""
        self.movies = []

    def addMovie(self, m):
        if isinstance(m, Movie):
            self.movies.append(m)
            return true
        return false

