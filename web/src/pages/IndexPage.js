import { Layout, Menu, Breadcrumb, AutoComplete } from 'antd';
import React, { Component } from 'react';
import '../style/indexPage.css';
import HeaderMenu from '../components/HeaderMenu';
import IndexSearch from '../components/IndexSearch';
import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'
import '../style/timg.jpg';


const { Header, Content, Footer } = Layout;
const objArr = [
  {
    value: "this",
    label: "this"
  },
  {
    value: "is",
    label: "is"
  },
  {
    value: "test",
    label: "test"
  }
];



class IndexPage extends React.Component {

  render() {
    console.log("objArr", objArr)
    return (
      <div>
        {/* <ParticlesBg  bg={true} config={config} background-color="#1890ff"/> */}
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 120,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 2,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 10,
                  "size_min": 0.3,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": true,
                  "rotateX": 1500,
                  "rotateY": 600
                }
              }
            },
            "interactivity": {
              "detect_on": "window",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 250,
                  "line_linked": {
                    "opacity": 0.75
                  }
                },
                "bubble": {
                  "distance": 250,
                  "size": 0,
                  "duration": 2,
                  "opacity": 0,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": false
          }


          }

          style={{
            width: '100%',
            backgroundColor: "#21618C",
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0
          }}

        />
        <Layout>
          <HeaderMenu />
        </Layout>
        <Content >
          <IndexSearch />
        </Content>
      </div>

    );
  }
}

export default IndexPage;