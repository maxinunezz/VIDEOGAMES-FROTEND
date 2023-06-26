import axios from "axios";
import { useState, useEffect } from "react";
import {
  Root,
  Label,
  Input,
  FormStyle,
  Labeel,
  Background,
  Title,
  H3,
} from "./styled";
import { ButtonA } from "../NavBar/button";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPlatforms } from "../../Redux/actions";
import validate from "../Validation/Validation";

const plataformas = ["Playstation 5", "Playstation 4", "Xbox ONE"];

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(getPlatforms());
  }, []);
  const platforms = useSelector((state) => state.platforms);

  const [form, setForm] = useState({
    name: "",
    description: "",
    platforms: [],
    image: "",
    releaseDate: "",
    rating: "",
    genre: [],
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const updatedForm = {
      ...form,
      [property]: value,
    };

    const updatedErrors = validate(updatedForm);

    setForm(updatedForm);
    setErrors(updatedErrors);
  };

  const genresSelected = (event) => {
    if (event.target.checked) {
      setForm({ ...form, genre: [...form.genre, event.target.value] });
    } else {
      const genreFiltered = form.genre.filter((g) => g != event.target.value);
      setForm({ ...form, genre: genreFiltered });
    }
  };

  const platformsSelected = (event) => {
    if (event.target.checked) {
      setForm({ ...form, platforms: [...form.platforms, event.target.value] });
    } else {
      const platformsFiltered = form.platforms.filter(
        (p) => p != event.target.value
      );
      setForm({ ...form, platforms: platformsFiltered });
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length > 0) {
      let message = "";
      Object.values(errors).map((error) => {
        message += error + " ";
      });

      return alert(message);
    }
    axios
      .post("http://localhost:3001/myvideogames", form)
      .then((res) => {
        console.log(res);
        alert("Form sent seccessfully");
      })
      .catch((err) => alert("form failed: " + err));
  };

  return (
    <Background>
      <FormStyle>
        <Root>
          <Title>¡Create your own Videogame!</Title>
          <Label>Name:</Label>
          <Input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
            maxLength={60}
          />
          {errors.name && <H3>{errors.name}</H3>}
          <Label>Description:</Label>
          <Input
            type="text"
            value={form.description}
            onChange={changeHandler}
            name="description"
            maxLength={300}
          />
          {errors.description && <H3>{errors.description}</H3>}
          <Label>Genre:</Label>
          {genres.map((genre) => (
            <Labeel>
              <input
                value={genre.name}
                type="checkbox"
                onChange={genresSelected}
              />
              {genre.name}
            </Labeel>
          ))}
          <Label>Platforms:</Label>
          {platforms &&
            Array.isArray(platforms) &&
            platforms.map((platform) => (
              <Labeel>
                <input
                  value={platform.name}
                  type="checkbox"
                  onChange={platformsSelected}
                />
                {platform.name}
              </Labeel>
            ))}
          <Label>Image:</Label>
          <Input
            type="text"
            accept="image/*"
            value={form.image}
            onChange={changeHandler}
            name="image"
          />

          <Label>Release date:</Label>
          <Input
            type="date"
            value={form.releaseDate}
            onChange={changeHandler}
            name="releaseDate"
            min="1990-01-01"
            max={getCurrentDate()}
          />

          <Label>Rating:</Label>
          <Input
            type="number"
            min="1"
            max="5"
            value={form.rating}
            onChange={changeHandler}
            name="rating"
          />

          <ButtonA onClick={submitHandler}>Submit</ButtonA>
        </Root>
      </FormStyle>
    </Background>
  );
};

export default Form;
