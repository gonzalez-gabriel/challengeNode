const genreController = (Genre) => {
  //GET genreS
  const getGenres = async (req, res) => {
    try {
      const response = await genre.findAll();
      const data = response.map((genre) => genre.dataValues);
      res.status(200).json(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  //POST GENRE
  const postGenre = async (req, res) => {
    const { body } = req;
    try {
      const response = await Genre.create(body);
      res.status(200).json(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  //PUT GENRE
  const putGenreById = async (req, res) => {
    const { params, body } = req;
    try {
      const response = await Genre.update(body, {
        where: { id: params.id },
      });
      res.status(200).json(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  //DELETE GENRE
  const deleteGenreById = async (req, res) => {
    const { params } = req;
    try {
      const response = await Genre.destroy({ where: { id: params.id } });
      res.status(200).json(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    getGenres,
    postGenre,
    putGenreById,
    deleteGenreById,
  };
};

module.exports = genreController;
