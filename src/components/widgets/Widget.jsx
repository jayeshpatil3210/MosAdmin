import React from './widget.scss';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'see all users',
                icon: <Person2OutlinedIcon className='icon' style={{ color: 'crimson', backgroundColor: 'rgba(255, 0, 0, 0.2)' }} />,
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'view all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' style={{ color: 'goldenrod', backgroundColor: 'rgba(128,165, 32, 0.2)' }} />,
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                icon: <AttachMoneyOutlinedIcon className='icon' style={{ color: 'green', backgroundColor: 'rgba(0, 128, 0, 0.2)' }} />,
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'see details',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)' }} />,
            };
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessOutlinedIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget