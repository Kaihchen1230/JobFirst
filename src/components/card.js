import { Card } from 'antd';
import MyTag from './tag';

const { Meta } = Card;

const profileCard = (props) => {
    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <MyTag />
    </Card>
}

export default profileCard;