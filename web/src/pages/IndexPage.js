import { Layout, Menu, Breadcrumb, AutoComplete } from 'antd';
import React, { Component } from 'react';
import '../style/indexPage.css';
import HeaderMenu from '../components/HeaderMenu';
import IndexSearch from '../components/IndexSearch';

import ParticlesBg from 'particles-bg'
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
let config = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  // body: "./img/icon.png", // Whether to render pictures
  // rotate: [0, 20],
  alpha: [0.6, 0],
  scale: [1, 0.1],
  position: "center", // all or center or {x:1,y:1,width:100,height:100}
  color: ["random", "#ff0000"],
  cross: "dead", // cross or bround
  random: 15,  // or null,
  g: 5,    // gravity
  // f: [2, -1], // force
  onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
  }
};


class IndexPage extends React.Component {

  render() {
    console.log("objArr", objArr)
    return (
      <div>
        <ParticlesBg type="circle" bg={true} config={config} />
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