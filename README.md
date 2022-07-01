## weClass200 === Produce 101

클래스 101 사이트를 클론코딩하는 프로젝트입니다.

프론트엔드 : 이현석, 안유림, 양재원, 황석영

백엔드 : 송재관, 안남규

---

## introduce

#### 기술 스택

- `FE`: JavaScript React.js, HTML5, CSS, styled-components, react-router

- `BE`: Django, Python, MySQL, JWT, Bcrypt

#### Colaboration Tool

- Notion, Git, Trello, Slack

---

### 데모 영상

https://youtu.be/0y917vuJxNg

---

### 구현 기능

- 네브바

```
   - 상단 버튼을 이용한 라우팅 ( 로그인, 회원가입, 로그아웃 )
   - 토큰 존재 유무에 따른 버튼 렌더링 분화. ( 로그인, 회원가입 또는 로그아웃 )
   - localStorage 토큰 삭제를 통한 로그아웃
   - 검색 및 필터링 가능
   - 드롭다운 메뉴바 구성
```

![](https://velog.velcdn.com/images/willy4202/post/3ab7f1ba-5f26-4aa0-8517-6efaa77402e2/image.gif)

![](https://velog.velcdn.com/images/willy4202/post/4bd9d4d7-b423-496d-86cb-78987042ebd8/image.gif)

- 회원가입, 로그인

```
 - 카카오 소셜 로그인 기능 구현
```

![](https://velog.velcdn.com/images/willy4202/post/c4cb98f6-c601-4824-81bd-aca737a95326/image.gif)

- 메인 페이지

```
- slick slider 라이브러리 활용한 캐러셀 컴포넌트 구현
- path, query parameter 활용한 동적 페이지 구현
```

![](https://velog.velcdn.com/images/willy4202/post/abffbc63-a30c-42a7-80bd-b2a605fdd825/image.gif)

- 상품 상세보기

```
- 상품 별점 반영 가능한 댓글 창 구현
- 사이즈, 수량, 컬러 선택 후 장바구니 버튼 클릭 시 백엔드 서버로 유저 데이터 전송
- path Parameter 적용해서, 각기 다른 상품 정보를 받아올 수 있는 기능 구현
- 할인율 반영 가능
```

![](https://velog.velcdn.com/images/willy4202/post/1ae17e2c-ac3e-43ec-9f48-b3d92e2da2e5/image.gif)

- 결제

```
- 토큰 반영 후, 서로 다른 장바구니 리스트 출력 가능
- 상품이 존재하지 않는 화면
- 상품 전체 삭제 가능
- 재고, 주문 수량이 0 이하로 내려갈 시, alert창 출력
```

![](https://velog.velcdn.com/images/willy4202/post/913a16d7-f2f5-4ba7-8e08-de063766d68a/image.gif)

![](https://velog.velcdn.com/images/willy4202/post/4886efb3-f068-498e-a480-666930bf2c85/image.gif)




## 내가 맡은 기능 

- 상품 리스트

```
- 카테고리 선택에 따른 맞춤 상품 리스트 정렬
- 배열 형태로 정렬되어진 상품 구조
- react-slick을 이용한 캐러셀 구현
- 페이지네이션 구현
- 찜기능 구현
- 상품 정보에 따른 정렬 기능 추가 (인기순, 가격순 등)

```

![](https://velog.velcdn.com/images/willy4202/post/5405e789-0469-43e0-bec5-070413180641/image.gif)

![](https://velog.velcdn.com/images/willy4202/post/a484d627-704c-40eb-afc7-7254e4904d5b/image.gif)


- 크리에이터 센터

```
- 크리에이터 센터에서 직접, 강의를 만들 수 있는 기능 구현
```



### Reference

이 프로젝트는 `클래스 101` 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
