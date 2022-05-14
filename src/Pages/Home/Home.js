import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Cards from "../../Components/Card/Cards";
import PlaceholderCard from "../../Components/PlaceholderCard/PlaceholderCard";
import "./Home.css";

const Home = () => {
  let { search } = useParams();
  let navigate = useNavigate();

  const API_KEY = "AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM";
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${API_KEY}`;

  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const fetchSearch = async () => {
    try {
      setLoading(true);
      const searchRes = await fetch(URL, {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });
      if (searchRes.status === 403) {
        window.alert("You have exceeded your search quota");
        navigate("/");
        window.location.reload();
      }
      const searchData = await searchRes.json();
      console.log(searchData);
      setSearchResult(searchData?.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search !== undefined && fetchSearch();
  }, [search]);

  return (
    <>
      <div className="home">
        <Row className="g-0">
          {searchResult.map((result) => (
            <Col className="m-2">
              {loading ? (
                <PlaceholderCard />
              ) : (
                <Cards
                  videoId={result.id.videoId}
                  thumbnail={result.snippet.thumbnails.high.url}
                  title={result.snippet.title}
                  description={result.snippet.description}
                />
              )}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
