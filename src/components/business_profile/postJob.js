import { Card, Button, Col, Row, Layout, Icon, Avatar } from 'antd';
import React from 'react';
import { Link } from "gatsby"
import image0 from '../../../static/2.jpg';
import image1 from '../../../static/3.jpg';
import image2 from '../../../static/4.jpg';
import image3 from '../../../static/businessImages/business0.jpg';
import image4 from '../../../static/businessImages/business1.jpg';
// import nodataImg from '../../../static/nodata.png';

let nodataImg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERUSEhMWFRUXFxUSFxgXFRUXFRUVFRIWFhkVFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslICYtLy0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xABAEAACAQIDBAcFBgMIAwEAAAABAgADEQQSIQUGMUFRYXGBkaGxBxMiMsEzQlJictGS4fAUFiNDY4KiskRzgxX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAMBEBAQACAQMDAQcDBAMAAAAAAAECEQMEITESQVEyBRMUIkJhcYGRoRWx0eEjwfH/2gAMAwEAAhEDEQA/APcYCAgICAgICAgICAgICAgICAgICAgICBQmBGrbQpJ81RR3i/hObnjPNdTDK+IiNvDhx9/wVrek4++w+XX3OfwnYPGU6y56bBl6QZZLL3jiyy6rPJQQEBAQEBAQEBAQEBAQEBAQEBAQKMwHHSBAxO2qFPi4J6F+I+UrvLjPdZOPK+zV4jetfuUyetjbyErvPPaLJwfNazEbxV24MFH5QPUyu82dWThxjX1sVUf5nZu0mV22+atkk8MEhLHiKyoPiIHaYE/2WOc9cX+GynvudfCaOD3Z+o8R6HNLKQEBAQEBAQEBAQEBAQEBAQMNfEpTF3YL2mRcpPKZjb4arFbzUV+W7nq0HiZVefH27rpwZXy1GJ3mrN8oCeZ8TKrz5XwsnBjPLVYjF1Knzuzdp08JVcrfNWzGTwwSHSsIISQEDFVUHQi464FdysZ7jHmkNEqXW3IGxYelu+XcWWstKebHeO3qM1sZAQEBAQEBAQEBAQEBAx4iutNSzmwHEmRbJN1Mlt1Gixe9KD7NS3WdB+8ovUT2Xzp77tPitv16n3so6F08+MqvLlVs4sY1juWNyST0k3MrqxSEqQhVRc2HPSEs9TBVF4qe7X0nMylTqsE6csgoNbNlNum0jcTpLp4MGn8RUG4a97/CRwNpxcu/Z1rswUqKgM7ElQbC2hY/STbfERIx42moCMoIDA6XvqDaJb4pWko1Pd4+k/RUpnzAluF7xXnN42PZJvYCAgICAgICAgICAgICBqt5qebDt1FW8GEq5p+Rbw3Wbh5jbF9Kiz3yi9heRbJ5TpZJGbE0MuUg3DC/fzEiXZYPhHC5ipt/XKPVN6NVhBtrJE7HVmV8ysRmAbjpw6JXjJZqure67SqFcgA5wrdd+cfT2PK5KjGuym9jmS3QOWkWT07N92DAqczUzzUr3jUScr22ifDFQqqVNNzYEhgbXsR0xlLvcJ8K16tP3eQEsQbhrWFzxFuiJLvZda05jbBy1VboAPgxlkQ9pw9TMisOYB8ReehHnVkhBAQEBAQEBAQEBAQEDBj6Wem69KkeU5ym5Y6xurK84EwR6CXsypaoOv4fGc5zcTj5ZKirVJGi1Bp1Nb0M5m8f4T5X0lsihxbI4vfoP84vnsey6kj++YtfL8VyeGXlItnp7HfbVy1ynXR0QM+UqCDpe4vpOO8t0ntYxYisuUIl7A3JPEmTJd7pb7DY2oRa/Vewv4x6IbqPVqEm5NzJQwwEDT7fXVD1MPMfvJg9Y3ZrZ8HQb/TQeC2+k34X8sYM5rKtnOnBAQEBAQEBAQEBAQEBA84xtLJUdehiPOefZq6ehjdyVjptYg9BB8DIrpkxrA1GKm4Jv4ic4+O5fK44xihQ6g248dDePTN7TtjNdiMuY26LydRG2OSghJApe3GBfj6YWowHDS3YRec43cLNVHkhA1m3h8KnrPmP5SYh6F7Pq2bAp+UungxPoRNvFfysfN9bpJYqICAgICAgICAgICAgIHDbzUsuJbryt4j9wZi5prJt4bvBq5WsZaOGd/lGnTykXKTymS1dXwpQXJU8tDcyJltNmkedIX+7OXNbS9r9cb76GelhLlLn5wSO0cpzcvKZGR8IoDAEl1GY9HWBI9V/onTG1b3SJlAuwzEkX52sJGvVe6N6WbRObI/4lHiNDJx+Coc6QQIG21/w79DD6iTB13strXw9VPw1b9zIv1Bmrg8Vl6id47SXs5AQEBAQEBAQEBAQEBA5PfKlZ0bpUjwN/rMvPO8rVwXtY56UNCbglzo6Xtwa54dc4y7WVM7xhr06aj4XzHssPGTLb5hdJL1RSKoFBBALXFybzmT1d070Gl9rSHIhl7uXnG/FPmKhWSmjMLZXv/tMjctujxGAVwldiTdSWB56NrJ1vFG+7DTxQAylQ6gnLe4I75Pp9za3E4svYEAAcABw6pMx0W7R5KCBE2sL0W7j4MJI3PsrrfHXTpVH8CR9RNHBe9Z+o8R6LNLKQEBAQEBAQEBAQEBAQNFvhSvRVvwsPAgj9pRzz8u1/BfzacfMrWk7Pb4iDwZSvlOc/CcfKNOkJVPG2AuoYrwJ4icXBO0epWN819Treda9kMLuTqST2mBbAQECx6yrxYDvgYH2gg6T2D94NImJx2dSoXjpxkmnRezbZtVK71WUhPdlbkEXJZSLX48DNHBLvbPz2a09GmllICAgICAgICAgICAgIEDbtLNh6g/Lm8NfpK+Wbwqzius44CYm4gVhC0vISxPUA4kDtMDA+Opj71+wXg0wPtMDgp79INLExNaobIhPUqFjJkt8F1PLYYfdrHVuKMo/Ocvlx8p3OLK+zi8uE922wns+c/a1lHUik+Zt6SydPfeq71E9o3OE3HwifMGqH8zEDwW0snBiqvPnW6wuyqFL7Oki9ii/jxlkxk8RXc8r5qZOnJAQEBAQEBAQEBAQEBAQLaqZlKnmCPEWkXumXTzDG1VosUc2ZSQRreefZq6ehLubQqm1lHAE+Uh1pamIr1Ps6bH9Ks0mS3wi2TylUdgY+r/lso/MQg8L3nc4s77OLy4T3T8PuDiG+eoi+LH6TucGTi9Rj7RD2psFsEwVnD5hcEC3DS1pxyYeh3x8nr7pm6OBp1sTaoobKpYA6i+g4c5PDJcu7nmtmPZ6JTpKosoAHUAJt0x27XwggICAgICAgICAgICAgICAgICAgQMdsbD1zmq0lY9JGviNZzcMb5jvHPLHxTDbFw1P5KNMdeUE+J1iYYz2Rc8r7pyqBwFp05VgIHH+0FfsT/7B/wBJm6j2aum92l3UrZMXT/NmTxU287Srius4t5pvCvSpuYCAgICAgICAgICAgICAgICAgR6+LC6DUzF1HW48fbHvVmHHcltHF5ja1pXwdf8AeZenKadZcXpm2WniFPOaePquLP37uLhlGWaJduCAgICBy2/6f4VM9DkeKn9pn6jxGjp73rjsFVyVUf8AC6n/AJTNjdXbVlNyx60DPReaQEBAQEBAQEBAQEBAQEC2pUCi5M45OTHjm8qmY29ojNiCeHwjpP0Ew5dVyZzeH5cfm/8Apb93J571gasOtus8PCYs+px9t5X5vj+y2YX+EfnMS1WTLZdwWjnIF6sRwNp1hnlh9N0iyXyk0sY3MX9Z6HD1/JPrm5/lTlwz2TKdUMLierxcuHJN41RljcfK+WOSBz2/CXw1+h1PqPrKef6V3BfzOLw+y61UXRDbpOg7r8ZjbN6el7Nqlqa5tGCgMOu2s38ecyjBnjZUqduCAgICAgICAgICAgIGOvWCjr5CUdRz48OO759o7ww9VQqjc31PIch2zy+TP0318vfL2nx/K/Gb7Y+GCpUJ1Mx8nJlyXeVWY4yeFoMrdHOBWBQQKwF5Mtl3Cs1Mk6ro3rNfFlcr6sO2Xx7X/tVZrtfCbh6+YdfMT1um6mc2P7s+eHpZppcNdtqitRAjajMGt05TeU817aXcM77RRMjSuRiDcSZbLuIslmq21F8wBm7HL1TbHlj6bpfOnJAQEBAQEBAQEBAozWFzOcspjLamTfZr2qfePE/KOgdM8bk5rP8Ay5eb9M+J8tMx/TP6o5MwW23dW6Wst5CV0C3nAugWjjAugIAG2smWy7iKz5uDjjzE3XO9uow8/qirX6K2FN8wBE9nj5JnjMp7s2U1dNftI/EOyUc/1NHD9KNKFpA2WA+TvM2cP0s3N9STLVRAQEBAQEBAQEBAjYxuC9Op7BMPW5+MPnvf4i3inugO1zeeLyZ3PL1NWM1NKThJAQLFOsgXyRYTrIF8kICBfRex14HQy7g5Jhlq+L2rjObnZKwLWJU8tZ6XQZXHLLivsp5puTI2ilwD3eM1887So4b304n/APeq0Wamyh8rFbm4bQ6XI4zM162mbI24a1T3bIF0JBBPEcte/wAIRY7HDLZRN3HNYyMXJd5VlnbggICAgICAgICAga7HN8XcBPC6/O3m1+zVwz8qPMK4gIFrGBanGQlkkoY6nGQlchkoXQEBAzYep8YPd/XlNnTc2ubG337VVnj+Wxn2idAOuexz3tIq4fNcFvPhstbNycX7xofp4zJWvHww7uqTiaff5qR9Z1jN3RndTb0+eg84gICAgICAgICAgIGnqVMzE9Z9Z81z5erkyv7tuE1jFJS7ULQKF4GMmQlcnGBkkoY6nGQlbAuDmShfcwEAr2I7ROsLJlLUWXSRjaoYi3AT28+bDkv5aq4sbjLtrcfgkrLlftBHEHqnC2U2BsSnRqZhdiOZ5dQtLeGbyV82X5XSTYyEBAQEBAQEBAQEDX4x2vY8OU8PruTl9dmXbH2auKY63PKKRMGlyloFCTAZh0QGkALQLswgUNoFLiAzwFzArkgVECDjtrUaOjOL9A1PfbhLeLjytli3j4M8/EY8Ptug/wB8DtNvWersy6flx84t9sp1ZSVIOttOy/1mrgna1h5970nS9QQEBAQEBAQEBAQKMoPGc5YzKasTLpxvtF2tU2fRStQVTd8rBgSMtuOh01t4zHn0HDlfj+Fk5ckPdfeSri8Oaz0VU5mVQrGzBdL6jTW458Jk5Ogky1Mv8L8M7ZvSBV9o+HpuadahXpOuhBVDbss2o65z/p3J7WVz99J5dXQxyOqsDowDDTkRcSi9JyRb6lamMpgEknTXRWJ7gBrI/C8vwbab++ez82Q17NcLlNOsDcm1rFJ1+C5/Pp/2cfeYt375On1nH4bl+He1DiEHPyMfheX4NqDFLfQHwnX4Xk/b+5tccR0Kx7p1Ojy+YbarH7SxiuBRwi1EJALGuFKi+pKFfrLseix/Vl/j/txcsvaMm8mIxFPC1alEqropcXGb5dTodOF51x9Jx+r826nPcx7OC3d2vi8RSrVq1d3W60lF8qgkFjZVsOFptz4eLjwsxxmzosMuTnxt8Tdv9uyRMz6O1SQl6HuHQK4bMfvsWHZYD6GbunmsXz32lnMubU9o6SXvPICAgICAgICAgICByvtJwnvcBWHMU2cdqFX0/hlWd1lisw741H3Sw3usFh0/0kY9rjMfWZuS7yrRh9MZ9qbFoYkWrUkqW4Ej4h2NxEjHKzwm4y+UrCYVaVNaaCyooVRxsBwFzIt3Uydl1d0UXcqo6SQAO8xBHr7Po1srNTp1LWZSVVusFWtJ3YjUqZacpIHOrvngjiP7OKnx5smbKfdl+GUP26X4dct+7z1tx95jvTopUsUKwMOPTNSqKeaOPFSJ1PLm+HneyMOKOzcMh+eoWxLdIDAhP+NpPPlvJt+y+OzeRKXrWbXYeialRKa8XYL2XMnHHd0r5eSYY3K+z1/CUBTRUXgoCjuE9KTU0+VzyuWVyvuyyXJAQEBAQEBAQEBAQIG3KCVKFRXNhlOvRpOcpuJl13a+jTCIqjgqqo7FFphrbPAlSQMgMJeVe13FOcRSpG+RaecDkWZiCe0BQJq4J22zc17tt7IcY7Ua1JiStNkZPy5w11HVdb26zOeeTbrhvZ38zrmLFqxpuF+YqwX9RU285M8lfOYpsDlsQ98tuea9rdt56H7sL6MwoIRM3zZVv25ReeffLdPC7PrYyBfa+kFeaMpBIJuQSLnqPkOqRll6rt7vT8f3fFMFGNpytW4LFmnVWovFWB/lN3S8Us9VfN/bHX3DKcWP83/h7Bs3GLXpLUXgwv2HmJfZphwymU3EmQ6ICAgICAgICAgICBzHtDxRpYQm9gSAey40nWPlR1Fvo7JGGqrURWXUMoI7xPNr1rLO1UanIQvp9loGj3r3WpbQVc7FHS+V1sSAbXUg8RpLMOS4eHGeEySN2t36WApe7p3Yk5nZuLNa1+oADQSM87ldpxxmMbUgzh0rA1p2BhTX/tHuE97e+e2ub8VuGbrted+vLWnPom9tlOHS16YPEQMWKxS0qbVG4KL9vQB1mHWGFzy9Meds1ySeZv4zh9BJqaQcfigilujh1mWceFzumTrOpx4OO53+n71ztPFOr5wdTqeg9s9aT0zUfEcmV5Mrll5r3XcJGGBplgRmu4B5BjpK8vLZwY6wjoZyuICAgICAgIFruBxIHabQIOI25hafz4ikvbUS/heBAq754Bf/ACFP6VdvQQIlT2gYEcGc9lM/WBpd4d9MHiqD0Wp1SGGhyqLHkdWg1L2y8IG7W3hRGRtaR58TTPZzHVPOsuN1Xv58WPPjOTjrtMPXSoodGDKdQVNwe+dZY3G6sedLvwyTlJAi7V2gmGovWqXyoMxsLniBoO0iTjN3SLdTblKG1Nr4se8oUKVCkdUFYkuw5H+gJdcePHtVUyzy7xM2PvDihXXC43DFHa+SrTu1JrC+vHLw437hOcsMdbxqcc7vVjqZUsISh7U2pRwyZ6zhRyH3m6lXiZbxcOfJdYxxlnMZuuK2lttsZYgFaQ1VeZPS3X6Tnm47x53C+z1uhwxuE5J7tfXqWHRzPZKpN1szymMu3M4/Fe9bT5Rw/eenw8fon7vjOv6y9Tydvpnj/n+rZ7sYfCiqHxhbINQirfN+o30HVO7l8KePht75PWMPvzgLACoVA0F6bgAdwnDWnUd6sE/DE0h+psv/AGtA2NDHUn+SojfpdT6GBIgICAgefbw+0JqdR6WHpi6koXe/EGxsg6+ZPdA5PG72Y2r81d1HQnwea2PnA1FbEO/zuzfqYn1gY4CAgIFVcjgSJFkvl3hyZYXeN0k7N2hVw7XpOydIB+E9qnQy7Pk+8ms5K4xvp8Oq2dvy/CtTU9akqe8G49Jj5uLGTeG2zp7M7rLKRuqW9uHPEOv+0H0Mytn4TkvjVZv7zYU8XPej/tG0XpeX3n+YHejC/jb+B/2g/C8nwtberDcs57EP1jcTOk5Uervan3KTH9RCj6yNrMehzvmue29vditAhWkCDqou2n5m7eiep9ndPx80tynhg+0MMuCyY3zHI16rVGLOzOx5sSx8TPbmOOE1NSPKttbHZmLCIQ3I6dhnh/aXHM+WZYd+3d7n2d1eHFxXHkvv2/j/AOse0a4qiwuBz6+qZ+HiuF3VX2h1ePUYejHcnv8AuiU6QXgJottebjx44+F8h2QEANNRAmYba2IpfZ16q9QqNbvF7GBvsBv/AIynbOVqj8ygH+JbQPRN1t4Ux9IuqlCpysp1ANr6NzEDdQNNtndfC4slqlOzn76/C/eRx77wOWxnsyX/ACsQR1OoPmtvSBpsT7PMYvy+7fscg+DADzga2vujjk44dj+kq3oYEGtsjEJ81CqP/m9vG0CI6FeII7QR6wLYCAgIFQZGkzKzxV612H3jObx432XY9VzY+MqvGLf8XpOfucPhbj1/PP1f7K/26p0+QkfcYfDr/Ueo+f8AEUOLf8Rkzhwns4vX9Rf1MVSoW4m8sxnp+nso5OXPk+u7WyVZAQEBAzUsHUf5abt+lGPoIE2ju7i3+XD1e9CPW0DYYfcfHP8A5QX9ToPIEmBtcJ7Na5+0rU1/SGc+YEDe7P8AZzhUINR6lU9BIVfBdfOB1uDwlOigSmioo4BRYQP/2Q=="

const { Meta } = Card;

const JobItem = (props) => {
    let imgArray = [
        image0, image1, image2, image3, image4
    ];
    let jobItem = props.jobs.map((item, index) => {
        let jobLink = "/app/job-detail/" + item.id;
        return (
            <Col key={index} span={8} style={{ margin: '10px 0' }}>
                <Card title={item.campanyName} bordered={true}
                    style={{ width: 300, margin: "auto" }}
                    cover={<img alt="example" src={imgArray[index % 4]} />}
                >
                    <Meta
                        avatar={<Avatar src={props.companyLogo} />}
                        title={item.jobTitle}
                        description={item.description && item.description.substring(0,100)}
                    />
                    <p></p>
                    <div align="center">
                        <Button  style={{color:"#1BB28b", border:"1px solid #1BB28b"} }ghost>
                            <Link 
                                to={jobLink}
                                state={{ id: item.id}}>
                                Learn More
                            </Link>
                        </Button>
                    </div>
                </Card>
            </Col>)
    }

    );
    return (
        <div style={{ background: '#ECECEC', padding: '30px', marginBottom:"5%" }}>
            <Row gutter={16}>
                {jobItem}
            </Row>
        </div>
    );
}

const { Content } = Layout;
const postJob = (props) => {
    return (
        <Layout>
            <Content>
                {props.jobList.length >=1 ?                 
                <JobItem
                    jobs={props.jobList}
                    companyLogo={props.companyLogo}
                />:
                <img style={{marginLeft:"38%", width:"20%"}} src={nodataImg}/>}
            </Content>
        </Layout>
    )
}
export default postJob;

