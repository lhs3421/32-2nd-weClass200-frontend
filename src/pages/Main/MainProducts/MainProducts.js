import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { config } from "../../../config";

const MainProducts = ({
  id,
  thumbImg,
  contentName,
  creatorName,
  discountCoupon,
  likeAmount,
  discountRate,
  priceAmount,
  month,
  goToDetail,
  type,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [heartAmount, setHeartAmount] = useState(likeAmount);

  useEffect(() => {
    isLiked
      ? setHeartAmount(prev => prev + 1)
      : setHeartAmount(prev => prev - 1);
  }, [isLiked]);

  useEffect(() => {
    fetch(`${config.like}`, {
      method: "POST",
      body: JSON.stringify({
        product_id: Number(id),
      }),
    });
  }, [isLiked]);

  const countUp = () => {
    setIsLiked(!isLiked);
  };

  return (
    <ProductItem>
      <ProductImgBox type={type}>
        <ProductImg
          onClick={() => {
            goToDetail(id);
          }}
          type={type}
          src={thumbImg}
        />
        {discountCoupon && (
          <ProductCoupon>{String(discountCoupon)[0]}만원 쿠폰</ProductCoupon>
        )}
        <ProductHeartBtn>
          <HeartIcon
            className="fa-solid fa-heart"
            fontSize="25px"
            onClick={countUp}
            isLiked={isLiked}
          />
        </ProductHeartBtn>
      </ProductImgBox>
      <ProductDetailBox>
        <ProductInfoBox
          onClick={() => {
            goToDetail(id);
          }}
        >
          <ProductCreator>{creatorName}</ProductCreator>
          <ProductName>{contentName}</ProductName>
        </ProductInfoBox>
        {priceAmount && (
          <HeartIconBox>
            <HeartIcon
              className="fa-solid fa-heart"
              fontSize="18px"
              isLiked={isLiked}
            />
            <HeartCount>{heartAmount}</HeartCount>
          </HeartIconBox>
        )}
        {priceAmount && (
          <PriceBox
            onClick={() => {
              goToDetail(id);
            }}
          >
            <DiscountRate>{discountRate}%</DiscountRate>
            <InstallmentPrice>
              {parseInt(priceAmount / month).toLocaleString()}원
            </InstallmentPrice>
            <InstallmentMonth>({month}개월)</InstallmentMonth>
          </PriceBox>
        )}
      </ProductDetailBox>
    </ProductItem>
  );
};

export default MainProducts;

const ProductItem = styled.div`
  background-color: white;
`;

const ProductImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: ${({ type }) => (type === "Sale" ? "360px" : "276px")};
  height: ${({ type }) =>
    type === "New" ? "368px" : type === "Sale" ? "270px" : "207px"};
  margin-bottom: 15px;
  overflow: hidden;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ type }) =>
    type === "New" ? "cover" : type === "Sale" ? "cover" : "contain"};
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ProductCoupon = styled.span`
  background-color: red;
  padding: 4px 4px;
  position: absolute;
  left: 10px;
  top: 10px;
  color: white;
  font-weight: 400;
  font-size: 14px;
  align-items: center;
`;

const ProductHeartBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const HeartIcon = styled.i`
  font-size: ${props => props.fontSize};
  color: ${props => (props.isLiked ? "red" : "rgb(215, 215, 215)")};
  transition: all 0.2s ease;
  &:hover {
    border-radius: 50%;
    transform: scale(1.5);
  }
`;

const ProductDetailBox = styled.div`
  padding: 0 10px;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const ProductCreator = styled.p`
  color: black;
  margin-bottom: 5px;
  font-size: 11px;
  font-weight: 700;
`;

const ProductName = styled.p`
  color: black;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0px;
  overflow: hidden;
  padding: 0 2px;
`;

const HeartIconBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 5px;
`;

const HeartCount = styled.span`
  margin-left: 5px;
  font-size: 15px;
  color: rgb(162, 162, 162);
`;

const PriceBox = styled.div`
  padding-top: 5px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const DiscountRate = styled.span`
  color: #fd3049;
  margin-right: 10px;
  font-size: 20px;
  font-weight: 700;
`;

const InstallmentPrice = styled.span`
  margin-right: 10px;
  color: #101010;
  font-weight: 700;
`;

const InstallmentMonth = styled.span`
  color: #a2a2a2;
  font-weight: 400;
`;
