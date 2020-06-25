import React, { Component } from 'react';
import { Steps, Button, message, Card } from 'antd';
import '../style/payPage.css';
import qrcode from '../style/imgs/qrcode.png';
import { Link } from 'react-router-dom';
import { postIpAgain} from '../axios/index'


/**
 * 付费步骤组件
 */

const { Meta } = Card;
const { Step } = Steps;

const steps = [
  {
    title: '欢迎使用',
    content: '若您的访问次数已达上限，还想继续使用本网站的搜索功能时，请完成以下步骤',
  },
  {
    title: '阅读须知',
    content: 'Please read the "IMPORTANT notice" before filling this waybill. Your signature means you fully understand and accept all points is the notice. ',
  },
  {
    title: '确认订单',
    content: ''
  }
];

class PayStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
      getQrcode = () =>{
          console.log("getQrcode")
          return(
              <div id="card-box">
            <Card
                style={{ width: 200 }}
                cover={<img alt="example" src={qrcode} />}
            >
                <Meta title="请扫描以上二维码" description="永久VIP" />
            </Card>
            </div>
          )
      }
    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
      postIp = () =>{
        var userIp = localStorage.getItem("userIp")
        console.log("查看缓存里的ip",userIp)
        postIpAgain(userIp)
      }
    render() {
        const { current } = this.state;
        return (
            <div>
        <Steps current={current}
        >
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content?steps[current].content:this.getQrcode()}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => this.postIp()}><Link to="/index/payResult/3">Done</Link>
              
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>




            
        );
    }
}

export default PayStep;