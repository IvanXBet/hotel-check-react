import { useState, useEffect, useRef } from 'react';

import './mainItem.scss';
import house from '../../resources/icons/house.png'

const MainItem = ({data}) => {
    const {hotelName, price, dateIn, dateOut} = data;
    console.log(dateIn)
    const convertDate = (date) => {
        console.log(date)
        return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
    }

    return (
        <div className="main__item">
                    <div className="main__item-left">
                        <div className="main__item-icon">
                            <div className="main__item-circl">
                                <img src={house} alt="house"/>
                            </div>
                        </div>
                        <div className="main__item-header">
                            <div className="main__item-title">{hotelName}</div>
                            <div className="main__item-date">{dateIn} - 1 день</div>
                            <div className="main__item-stars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="99" height="17" viewBox="0 0 99 17" fill="none">
                                    <path d="M89.6598 2.01554C89.1936 3.13037 88.6262 4.48735 88.3987 5.03221C88.1725 5.57559 87.9815 6.02595 87.9815 6.02595C87.9815 6.02595 87.549 6.06287 87.0237 6.10273C86.4998 6.1426 85.5434 6.21495 84.8988 6.26368C84.2541 6.31388 83.3721 6.38033 82.9396 6.41282C82.507 6.4453 82.118 6.47631 82.0758 6.48074L82 6.4896L82.0688 6.559C82.1081 6.59591 82.5407 7.00197 83.0295 7.46119C83.5196 7.92041 84.1614 8.52138 84.4564 8.7975C86.2358 10.466 86.6473 10.8514 86.6642 10.8647C86.688 10.8839 86.7681 10.5281 85.903 14.2092C85.5434 15.7389 85.2527 16.9999 85.2527 16.9999C85.2527 16.9999 86.4732 16.2631 87.9605 15.3506C89.4464 14.4381 90.6725 13.6939 90.6851 13.6968C90.6963 13.6998 91.2441 14.0541 91.8999 14.4824C92.5572 14.912 93.5361 15.5514 94.0768 15.9043C94.6175 16.2572 95.2158 16.6485 95.4068 16.7725C95.5964 16.8981 95.7622 16.9999 95.7622 16.9999C95.7622 16.9999 95.7678 16.9748 95.7622 16.9438C95.7537 16.8936 95.1849 14.1427 94.6723 11.6754C94.5501 11.0818 94.449 10.5856 94.449 10.5724C94.449 10.5532 95.3605 9.74104 98.6581 6.81888C99.0205 6.49846 99.0247 6.49403 98.9811 6.48369C98.9559 6.47779 97.5613 6.33013 95.8815 6.15441C94.2018 5.9787 92.8142 5.82957 92.7974 5.82218C92.7763 5.81332 92.7103 5.65828 92.5179 5.16362C92.3803 4.80629 91.9393 3.66784 91.539 2.63276C91.1387 1.59767 90.7469 0.583254 90.6682 0.380962C90.5896 0.177193 90.5222 0.00738525 90.5166 1.90735e-06C90.5123 -0.00590515 90.1261 0.900721 89.6598 2.01554Z" fill="#6C6845"/>
                                    <path d="M89.6598 2.01554C89.1936 3.13037 88.6262 4.48735 88.3987 5.03221C88.1725 5.57559 87.9815 6.02595 87.9815 6.02595C87.9815 6.02595 87.549 6.06287 87.0237 6.10273C86.4998 6.1426 85.5434 6.21495 84.8988 6.26368C84.2541 6.31388 83.3721 6.38033 82.9396 6.41282C82.507 6.4453 82.118 6.47631 82.0758 6.48074L82 6.4896L82.0688 6.559C82.1081 6.59591 82.5407 7.00197 83.0295 7.46119C83.5196 7.92041 84.1614 8.52138 84.4564 8.7975C86.2358 10.466 86.6473 10.8514 86.6642 10.8647C86.688 10.8839 86.7681 10.5281 85.903 14.2092C85.5434 15.7389 85.2527 16.9999 85.2527 16.9999C85.2527 16.9999 86.4732 16.2631 87.9605 15.3506C89.4464 14.4381 90.6725 13.6939 90.6851 13.6968C90.6963 13.6998 91.2441 14.0541 91.8999 14.4824C92.5572 14.912 93.5361 15.5514 94.0768 15.9043C94.6175 16.2572 95.2158 16.6485 95.4068 16.7725C95.5964 16.8981 95.7622 16.9999 95.7622 16.9999C95.7622 16.9999 95.7678 16.9748 95.7622 16.9438C95.7537 16.8936 95.1849 14.1427 94.6723 11.6754C94.5501 11.0818 94.449 10.5856 94.449 10.5724C94.449 10.5532 95.3605 9.74104 98.6581 6.81888C99.0205 6.49846 99.0247 6.49403 98.9811 6.48369C98.9559 6.47779 97.5613 6.33013 95.8815 6.15441C94.2018 5.9787 92.8142 5.82957 92.7974 5.82218C92.7763 5.81332 92.7103 5.65828 92.5179 5.16362C92.3803 4.80629 91.9393 3.66784 91.539 2.63276C91.1387 1.59767 90.7469 0.583254 90.6682 0.380962C90.5896 0.177193 90.5222 0.00738525 90.5166 1.90735e-06C90.5123 -0.00590515 90.1261 0.900721 89.6598 2.01554Z" fill="white" fillOpacity="0.6"/>
                                    <path d="M68.6598 2.01554C68.1936 3.13037 67.6262 4.48735 67.3987 5.03221C67.1725 5.57559 66.9815 6.02595 66.9815 6.02595C66.9815 6.02595 66.549 6.06287 66.0237 6.10273C65.4998 6.1426 64.5434 6.21495 63.8988 6.26368C63.2541 6.31388 62.3721 6.38033 61.9396 6.41282C61.507 6.4453 61.118 6.47631 61.0758 6.48074L61 6.4896L61.0688 6.559C61.1081 6.59591 61.5407 7.00197 62.0295 7.46119C62.5196 7.92041 63.1614 8.52138 63.4564 8.7975C65.2358 10.466 65.6473 10.8514 65.6642 10.8647C65.688 10.8839 65.7681 10.5281 64.903 14.2092C64.5434 15.7389 64.2527 16.9999 64.2527 16.9999C64.2527 16.9999 65.4732 16.2631 66.9605 15.3506C68.4464 14.4381 69.6725 13.6939 69.6851 13.6968C69.6963 13.6998 70.2441 14.0541 70.8999 14.4824C71.5572 14.912 72.5361 15.5514 73.0768 15.9043C73.6175 16.2572 74.2158 16.6485 74.4068 16.7725C74.5964 16.8981 74.7622 16.9999 74.7622 16.9999C74.7622 16.9999 74.7678 16.9748 74.7622 16.9438C74.7537 16.8936 74.1849 14.1427 73.6723 11.6754C73.5501 11.0818 73.449 10.5856 73.449 10.5724C73.449 10.5532 74.3605 9.74104 77.6581 6.81888C78.0205 6.49846 78.0247 6.49403 77.9811 6.48369C77.9559 6.47779 76.5613 6.33013 74.8815 6.15441C73.2018 5.9787 71.8142 5.82957 71.7974 5.82218C71.7763 5.81332 71.7103 5.65828 71.5179 5.16362C71.3803 4.80629 70.9393 3.66784 70.539 2.63276C70.1387 1.59767 69.7469 0.583254 69.6682 0.380962C69.5896 0.177193 69.5222 0.00738525 69.5166 1.90735e-06C69.5123 -0.00590515 69.1261 0.900721 68.6598 2.01554Z" fill="#6C6845"/>
                                    <path d="M68.6598 2.01554C68.1936 3.13037 67.6262 4.48735 67.3987 5.03221C67.1725 5.57559 66.9815 6.02595 66.9815 6.02595C66.9815 6.02595 66.549 6.06287 66.0237 6.10273C65.4998 6.1426 64.5434 6.21495 63.8988 6.26368C63.2541 6.31388 62.3721 6.38033 61.9396 6.41282C61.507 6.4453 61.118 6.47631 61.0758 6.48074L61 6.4896L61.0688 6.559C61.1081 6.59591 61.5407 7.00197 62.0295 7.46119C62.5196 7.92041 63.1614 8.52138 63.4564 8.7975C65.2358 10.466 65.6473 10.8514 65.6642 10.8647C65.688 10.8839 65.7681 10.5281 64.903 14.2092C64.5434 15.7389 64.2527 16.9999 64.2527 16.9999C64.2527 16.9999 65.4732 16.2631 66.9605 15.3506C68.4464 14.4381 69.6725 13.6939 69.6851 13.6968C69.6963 13.6998 70.2441 14.0541 70.8999 14.4824C71.5572 14.912 72.5361 15.5514 73.0768 15.9043C73.6175 16.2572 74.2158 16.6485 74.4068 16.7725C74.5964 16.8981 74.7622 16.9999 74.7622 16.9999C74.7622 16.9999 74.7678 16.9748 74.7622 16.9438C74.7537 16.8936 74.1849 14.1427 73.6723 11.6754C73.5501 11.0818 73.449 10.5856 73.449 10.5724C73.449 10.5532 74.3605 9.74104 77.6581 6.81888C78.0205 6.49846 78.0247 6.49403 77.9811 6.48369C77.9559 6.47779 76.5613 6.33013 74.8815 6.15441C73.2018 5.9787 71.8142 5.82957 71.7974 5.82218C71.7763 5.81332 71.7103 5.65828 71.5179 5.16362C71.3803 4.80629 70.9393 3.66784 70.539 2.63276C70.1387 1.59767 69.7469 0.583254 69.6682 0.380962C69.5896 0.177193 69.5222 0.00738525 69.5166 1.90735e-06C69.5123 -0.00590515 69.1261 0.900721 68.6598 2.01554Z" fill="white" fillOpacity="0.6"/>
                                    <path d="M7.65985 2.01548C7.19357 3.1303 6.62617 4.48729 6.39865 5.03215C6.17254 5.57553 5.98153 6.02589 5.98153 6.02589C5.98153 6.02589 5.54896 6.0628 5.0237 6.10267C4.49984 6.14254 3.54342 6.21489 2.89878 6.26362C2.25413 6.31382 1.37214 6.38027 0.939574 6.41276C0.507005 6.44524 0.117973 6.47625 0.0758401 6.48068L0 6.48954L0.0688178 6.55894C0.108142 6.59585 0.540712 7.00191 1.02946 7.46113C1.51961 7.92035 2.16144 8.52132 2.45638 8.79744C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.528 3.90295 14.2091C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3505C7.44637 14.438 8.67245 13.6938 8.68509 13.6968C8.69633 13.6997 9.24406 14.0541 9.89994 14.4823C10.5572 14.912 11.5361 15.5513 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.898 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6753C12.5501 11.0817 12.449 10.5856 12.449 10.5723C12.449 10.5531 13.3605 9.74098 16.6581 6.81882C17.0205 6.4984 17.0247 6.49397 16.9811 6.48363C16.9559 6.47773 15.5613 6.33007 13.8815 6.15435C12.2018 5.97864 10.8142 5.8295 10.7974 5.82212C10.7763 5.81326 10.7103 5.65822 10.5179 5.16356C10.3803 4.80623 9.93926 3.66778 9.53899 2.6327C9.13873 1.59761 8.74689 0.583193 8.66824 0.380901C8.58959 0.177132 8.52218 0.00732422 8.51656 -5.91278e-05C8.51234 -0.00596619 8.12612 0.90066 7.65985 2.01548Z" fill="#CDBC1E"/>
                                    <path d="M48.6598 2.01548C48.1936 3.1303 47.6262 4.48729 47.3987 5.03215C47.1725 5.57553 46.9815 6.02589 46.9815 6.02589C46.9815 6.02589 46.549 6.0628 46.0237 6.10267C45.4998 6.14254 44.5434 6.21489 43.8988 6.26362C43.2541 6.31382 42.3721 6.38027 41.9396 6.41276C41.507 6.44524 41.118 6.47625 41.0758 6.48068L41 6.48954L41.0688 6.55894C41.1081 6.59585 41.5407 7.00191 42.0295 7.46113C42.5196 7.92035 43.1614 8.52132 43.4564 8.79744C45.2358 10.466 45.6473 10.8514 45.6642 10.8647C45.688 10.8839 45.7681 10.528 44.903 14.2091C44.5434 15.7389 44.2527 16.9999 44.2527 16.9999C44.2527 16.9999 45.4732 16.2631 46.9605 15.3505C48.4464 14.438 49.6725 13.6938 49.6851 13.6968C49.6963 13.6997 50.2441 14.0541 50.8999 14.4823C51.5572 14.912 52.5361 15.5513 53.0768 15.9043C53.6175 16.2572 54.2158 16.6485 54.4068 16.7725C54.5964 16.898 54.7622 16.9999 54.7622 16.9999C54.7622 16.9999 54.7678 16.9748 54.7622 16.9438C54.7537 16.8936 54.1849 14.1427 53.6723 11.6753C53.5501 11.0817 53.449 10.5856 53.449 10.5723C53.449 10.5531 54.3605 9.74098 57.6581 6.81882C58.0205 6.4984 58.0247 6.49397 57.9811 6.48363C57.9559 6.47773 56.5613 6.33007 54.8815 6.15435C53.2018 5.97864 51.8142 5.8295 51.7974 5.82212C51.7763 5.81326 51.7103 5.65822 51.5179 5.16356C51.3803 4.80623 50.9393 3.66778 50.539 2.6327C50.1387 1.59761 49.7469 0.583193 49.6682 0.380901C49.5896 0.177132 49.5222 0.00732422 49.5166 -5.91278e-05C49.5123 -0.00596619 49.1261 0.90066 48.6598 2.01548Z" fill="#CDBC1E"/>
                                    <path d="M27.6598 2.01554C27.1936 3.13037 26.6262 4.48735 26.3987 5.03221C26.1725 5.57559 25.9815 6.02595 25.9815 6.02595C25.9815 6.02595 25.549 6.06287 25.0237 6.10273C24.4998 6.1426 23.5434 6.21495 22.8988 6.26368C22.2541 6.31388 21.3721 6.38033 20.9396 6.41282C20.507 6.4453 20.118 6.47631 20.0758 6.48074L20 6.4896L20.0688 6.559C20.1081 6.59591 20.5407 7.00197 21.0295 7.46119C21.5196 7.92041 22.1614 8.52138 22.4564 8.7975C24.2358 10.466 24.6473 10.8514 24.6642 10.8647C24.688 10.8839 24.7681 10.5281 23.903 14.2092C23.5434 15.7389 23.2527 16.9999 23.2527 16.9999C23.2527 16.9999 24.4732 16.2631 25.9605 15.3506C27.4464 14.4381 28.6725 13.6939 28.6851 13.6968C28.6963 13.6998 29.2441 14.0541 29.8999 14.4824C30.5572 14.912 31.5361 15.5514 32.0768 15.9043C32.6175 16.2572 33.2158 16.6485 33.4068 16.7725C33.5964 16.8981 33.7622 16.9999 33.7622 16.9999C33.7622 16.9999 33.7678 16.9748 33.7622 16.9438C33.7537 16.8936 33.1849 14.1427 32.6723 11.6754C32.5501 11.0818 32.449 10.5856 32.449 10.5724C32.449 10.5532 33.3605 9.74104 36.6581 6.81888C37.0205 6.49846 37.0247 6.49403 36.9811 6.48369C36.9559 6.47779 35.5613 6.33013 33.8815 6.15441C32.2018 5.9787 30.8142 5.82957 30.7974 5.82218C30.7763 5.81332 30.7103 5.65828 30.5179 5.16362C30.3803 4.80629 29.9393 3.66784 29.539 2.63276C29.1387 1.59767 28.7469 0.583254 28.6682 0.380962C28.5896 0.177193 28.5222 0.00738525 28.5166 1.90735e-06C28.5123 -0.00590515 28.1261 0.900721 27.6598 2.01554Z" fill="#CDBC1E"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="main__item-right">
                        <div className="main__item-heart">
                            
                        </div>
                        <div className="main__item-price">Price:<span>{price.toFixed()} ₽</span></div>
                    </div>
                </div>
    )
}

export default MainItem;