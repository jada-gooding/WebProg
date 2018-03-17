import sys
sys.path.insert(0, '../py')
from movieGenre import Movie
from movieGenre import Genre
import unittest

class testMovie(unittest.TestCase):
    def __createMovie(self):
        return Movie()

    def test_constructor(self):
        m = self.__createMovie()
        self.assertEqual(m.uuid, "")
    
    def test_addRelatedMovie(self, m):
        m = self.__createMovie()
        arm = m.addRelatedMovie(self, m)
        self.assertEqual(type(arm), bool)
    
    def test_setGenre(self, g):
        m = self.__createMovie()
        sg = m.setGenre(self, g)
        self.assertEqual(type(sg), bool)
    
class testGenre(unittest.TestCase):
    def __createGenre(self):
        return Genre()

    def test_GConstructor(self):
        g = self.__createGenre()
        self.assertEqual(g.name, "")
    
    def test_addMovie(self, m):
        g = self.__createGenre()
        am = g.addMovie(self, m)
        self.assertEqual(type(am), bool)

if __name__ == '__main__':
    unittest.main()
