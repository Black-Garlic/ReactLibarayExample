# React Library 예제 모음

라이브러리 조사를 하면서 실행되는 예제, TypeScript 타입 지정 등 많은 시간을 소모했던 라이브러리들의 예제 백업입니다.

## 라이브러리 목록
### 1. React Router
### 2. Ant Design
### 3. React PDF
### 4. React File Viewer
### 5. React Image Crop
### 6. React Beautiful DnD
### 7. TipTap Text Editor

---

## 1. React Router
#### 페이지 전환
#### 작성일 : 23.07.13   
#### 버전 : 6.14.1   
#### 링크 : [React Router](https://reactrouter.com/en/main)   
#### 커밋 기록 : [React Router, Layout 추가](https://github.com/Black-Garlic/ReactLibraryExample/commit/b3153a8ea88d551cabde6db3780ee2caff570ddc)
#### `npm install react-router-dom`   
#### `yarn add react-router-dom`   
#### 관련 파일
* config/router.tsx : Router 설정
* index.tsx : Router 설정 적용

---

## 2. Ant Design
#### 디자인 컴포넌트
#### 작성일 : 23.07.13
#### 버전 : 5.7.0
#### 링크 : [Ant Design](https://ant.design/)
#### 커밋 기록 : [React Router, Layout 추가](https://github.com/Black-Garlic/ReactLibraryExample/commit/b3153a8ea88d551cabde6db3780ee2caff570ddc)
#### `npm install antd --save`
#### `yarn add antd`
#### 관련 파일 - /common
* MainTemplate.tsx : 기본 레이아웃
* Header.tsx : Header
* Sidebar.tsx : Sidebar, 메뉴별 화면 이동
* Footer.tsx : Footer

---

## 3. React PDF
#### PDF 파일 뷰어
#### 작성일 : 23.07.13
#### 버전 : 7.1.2
#### 링크 : [React PDF](https://github.com/wojtekmaj/react-pdf)
#### 커밋 기록 : [react-pdf 추가](https://github.com/Black-Garlic/ReactLibraryExample/commit/201c3202a2fefde13d72406f33122fbb909ce88d)
#### `npm install react-pdf`
#### `yarn add react-pdf`
#### 관련 파일 - /react-pdf
* ReactPDFPage.tsx : React PDF 예시 페이지
* ReactPDFRender.tsx : React PDF 렌더링
* ReactPDFButton.tsx : React PDF 렌더링 설정 - 페이지 이동, 페이지 확대 비율

---

## 4. React File Viewer
#### 파일 뷰어 - pdf, csv, xlsx, docx, mp4, webm, mp3
#### 작성일 : 23.07.13
#### 버전 : 1.2.1
#### 링크 : [React File Viewer](https://github.com/plangrid/react-file-viewer)
#### 커밋 기록 : [react-file-viewer 추가](https://github.com/Black-Garlic/ReactLibraryExample/commit/479c7f5b46d709b1c1fa130d2b931db8d43ee9dd)
#### `npm install react-file-viewer`
#### `yarn add react-file-viewer`
#### 관련 파일 - /react-file-viewer
* ReactFileViewerPage.tsx : React File Viewer 예시 페이지

---

## 5. React Image Crop
#### 이미지 자르기
#### 작성일 : 23.07.13
#### 버전 : 10.1.5
#### 링크 : [React Image Crop](https://github.com/DominicTobias/react-image-crop)
#### 커밋 기록 : [react-image-crop 추가](https://github.com/Black-Garlic/ReactLibraryExample/commit/e9acf22d34e1e4e25da41b08121312d97c1eab05)
#### `npm install react-image-crop --save`
#### `yarn add react-image-crop`
#### 관련 파일 - /react-image-crop
* ReactImageCropPage.tsx : React Image Crop 예시 페이지
* ReactImageCropButton.tsx : 자르기 설정 - 확대 비율, 회전, 고정 비율 설정 / 해제
* ReactImageCropArea.tsx : 이미지 자르기 영역
* ReactImageCropCanvas.tsx : 이미지 자르기 결과 표시
* SampleImage.png : 예시 이미지
* canvasPreview.ts : 이미지 자르기 결과 렌더링
* useDebounceEffect.ts : Debounce 설정

---

## 6. React Beautiful DnD
#### Drag & Drop
#### 작성일 : 23.07.13
#### 버전 : 13.1.1
#### 링크 : [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd)
#### 커밋 기록 : [react-beautiful-dnd 추가](https://github.com/Black-Garlic/ReactLibraryExample/commit/936b80f2ca288899d96b8e85014def34fcbedba9)
#### `npm install react-beautiful-dnd --save`
#### `yarn add react-beautiful-dnd`
#### 관련 파일 - /react-beautiful-dnd
* ReactDnDType.ts : React Beautiful DnD 타입
* ReactDnDButton.tsx : React Beautiful DnD 버튼 - 초기화, 아이템 추가, 그룹 추가
* single/ReactDnDSinglePage.tsx : React Beautiful DnD 단일 예시 페이지
* single/ReactDnDSingleVerticalArea.tsx : 단일 세로 형태
* single/ReactDnDSingleHorizonArea.tsx : 단일 가로 형태
* single/ReactDnDSingleItem.tsx : 단일 아이템
* multi/ReactDnDMultiPage.tsx : React Beautiful DnD 복수 예시 페이지
* multi/ReactDnDMultiVerticalArea.tsx : 복수 세로 형태
* multi/ReactDnDMultiHorizonArea.tsx : 복수 가로 형태
* multi/ReactDnDMultiItem.tsx : 복수 아이템

---

## 7. TipTap Text Editor
#### 텍스트 에디터
#### 작성일 : 23.07.14
#### 버전 : 2.0.3
#### 링크 : [TipTap](https://tiptap.dev/) / [TipTap Extensions](https://tiptap.dev/extensions)
#### 커밋 기록 : [tiptap editor 추가](https://github.com/Black-Garlic/ReactLibraryExample/commit/c78933dd6bcd41651abf0ea08f974d751152b635)
### 기본 설치
#### `npm install @tiptap/react @tiptap/pm @tiptap/starter-kit`
#### `yarn add @tiptap/react @tiptap/pm @tiptap/starter-kit`
### 확장 기능 설치
#### 버블 메뉴
#### `npm install @tiptap/extension-bubble-menu`
#### 글자수 확인
#### `npm install @tiptap/extension-character-count`
#### 글자 색상
#### `npm install @tiptap/extension-color`
#### 이미지
#### `npm install @tiptap/extension-image`
#### 링크
#### `npm install @tiptap/extension-link`
#### Placeholder
#### `npm install @tiptap/extension-placeholder`
#### 아래첨자
#### `npm install @tiptap/extension-subscript`
#### 위첨자
#### `npm install @tiptap/extension-superscript`
#### 테이블
#### `npm install @tiptap/extension-table`
#### 테이블 셀
#### `npm install @tiptap/extension-table-cell`
#### 테이블 헤더
#### `npm install @tiptap/extension-header`
#### 테이블 줄
#### `npm install @tiptap/extension-row`
#### 텍스트 정렬
#### `npm install @tiptap/extension-text-align`
#### 텍스트 스타일
#### `npm install @tiptap/extension-text-style`
#### 텍스트 밑줄
#### `npm install @tiptap/extension-underline`

#### 관련 파일 - /tiptap
* TipTapStyle.ts : 에디터 스타일 적용
* simple/TipTapSimplePage.tsx : TipTap 에디터 간단 예제 페이지
* simple/TipTapSimpleMenu.tsx : 간단 예제 메뉴
* editor-bar/TipTapEditorPage.tsx : TipTap 에디터 툴바 예제 페이지
* editor-bar/TipTapEditorToolBar.tsx : 에디터 툴바
* editor-bar/TipTapEditorToolBarFontColor : 텍스트 색상 메뉴
* editor-bar/TipTapEditorToolBarHeading : H1 ~ H6 메뉴
* editor-bar/TipTapEditorToolBarTable : 테이블 선택 메뉴
* assets/editor.css : 에디터 툴바 css
* assets/icon-* : 에디터 툴바 메뉴 아이콘
* assets/sprite-* : 에디터 툴바 배경