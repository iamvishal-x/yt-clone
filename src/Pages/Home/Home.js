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
  // const [isEmpty, setIsEmpty] = useState(null);
  // const [searchResult, setSearchResult] = useState([]);
  const [searchResult, setSearchResult] = useState([
    {
      kind: "youtube#searchResult",
      etag: "oGQwC9TAzp37EDFAgFCrVyjKlVY",
      id: {
        kind: "youtube#channel",
        channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
      },
      snippet: {
        publishedAt: "2012-02-20T00:43:50Z",
        channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
        title: "MrBeast",
        description:
          "SUBSCRIBE FOR A COOKIE! Accomplishments - Raised $20000000 To Plant 20000000 Trees - Given millions to charity ...",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/ytc/AKedOLQn-UcDT2oxlNIT3ez7hxQpehCS9DTDYqI72SjbjQ=s88-c-k-c0xffffffff-no-rj-mo",
          },
          medium: {
            url: "https://yt3.ggpht.com/ytc/AKedOLQn-UcDT2oxlNIT3ez7hxQpehCS9DTDYqI72SjbjQ=s240-c-k-c0xffffffff-no-rj-mo",
          },
          high: {
            url: "https://yt3.ggpht.com/ytc/AKedOLQn-UcDT2oxlNIT3ez7hxQpehCS9DTDYqI72SjbjQ=s800-c-k-c0xffffffff-no-rj-mo",
          },
        },
        channelTitle: "MrBeast",
        liveBroadcastContent: "none",
        publishTime: "2012-02-20T00:43:50Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "TNKIjDGl6eIHFX5P69cAjSk5Yj8",
      id: {
        kind: "youtube#video",
        videoId: "MCJLW8O5-dg",
      },
      snippet: {
        publishedAt: "2020-09-06T13:00:05Z",
        channelId: "UCkAGrHCLFmlK3H2kd6isipg",
        title:
          "Bean SHOPPING | (Mr Bean Cartoon) | Mr Bean Full Episodes | Mr Bean Comedy",
        description:
          "Mr. Bean is locked in a department store overnight and has the time of his life! Stay tuned: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/MCJLW8O5-dg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/MCJLW8O5-dg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/MCJLW8O5-dg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mr Bean",
        liveBroadcastContent: "none",
        publishTime: "2020-09-06T13:00:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "FWt59l92CV9aRSIWzpaIijCloIM",
      id: {
        kind: "youtube#channel",
        channelId: "UCkAGrHCLFmlK3H2kd6isipg",
      },
      snippet: {
        publishedAt: "2006-01-04T13:32:47Z",
        channelId: "UCkAGrHCLFmlK3H2kd6isipg",
        title: "Mr Bean",
        description:
          "Welcome to the Official Mr Bean YouTube Channel! Follow the adventures of everyone's favourite crazy and clumsy character Mr ...",
        thumbnails: {
          default: {
            url: "https://yt3.ggpht.com/ytc/AKedOLSOkEcl2lDSFEBtGFoNL8eLULm1RkXnBcb3i45uxA=s88-c-k-c0xffffffff-no-rj-mo",
          },
          medium: {
            url: "https://yt3.ggpht.com/ytc/AKedOLSOkEcl2lDSFEBtGFoNL8eLULm1RkXnBcb3i45uxA=s240-c-k-c0xffffffff-no-rj-mo",
          },
          high: {
            url: "https://yt3.ggpht.com/ytc/AKedOLSOkEcl2lDSFEBtGFoNL8eLULm1RkXnBcb3i45uxA=s800-c-k-c0xffffffff-no-rj-mo",
          },
        },
        channelTitle: "Mr Bean",
        liveBroadcastContent: "none",
        publishTime: "2006-01-04T13:32:47Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "CSKE5__JAQe9dWyf3683G9z0qZA",
      id: {
        kind: "youtube#video",
        videoId: "JYNyQcblzgI",
      },
      snippet: {
        publishedAt: "2020-04-03T13:00:17Z",
        channelId: "UCkAGrHCLFmlK3H2kd6isipg",
        title: "ARMCHAIR Bean | Funny Clips | Mr Bean Official",
        description:
          "Mr Bean finds an innovative way to get his armchair home from the sale... Stay tuned: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/JYNyQcblzgI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/JYNyQcblzgI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/JYNyQcblzgI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Mr Bean",
        liveBroadcastContent: "none",
        publishTime: "2020-04-03T13:00:17Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "cln3qkp3jfNTHkHqTJ0kt-JHKjE",
      id: {
        kind: "youtube#video",
        videoId: "0e3GPea1Tyg",
      },
      snippet: {
        publishedAt: "2021-11-24T21:00:01Z",
        channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
        title: "$456,000 Squid Game In Real Life!",
        description:
          "MAKE SURE YOU WATCH UNTIL GLASS BRIDGE IT'S INSANE! Download Brawl Stars now and get a free gift from me in the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/0e3GPea1Tyg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/0e3GPea1Tyg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/0e3GPea1Tyg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "MrBeast",
        liveBroadcastContent: "none",
        publishTime: "2021-11-24T21:00:01Z",
      },
    },
  ]);
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
        alert("You have exceeded your search quota");
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

  // useEffect(() => {
  //   search !== undefined && fetchSearch();
  // }, [search]);

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
