import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as albumActions from "../../store/albums";
import "./AlbumPage.css";

const AlbumPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentAlbum = useSelector((state) => state.album);

  useEffect(() => {
    dispatch(albumActions.retrieveAlbumInfo(id));
  }, [dispatch, id]);

  return (
    <>
      <h1>{currentAlbum.name}</h1>
    </>
  );
};

export default AlbumPage;
