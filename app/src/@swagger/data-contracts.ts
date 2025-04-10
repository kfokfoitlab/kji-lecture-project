/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserUpdateRequestDto {
  /** 닉네임 */
  nickname?: string;
  /** 이름 */
  name?: string;
  /** 이메일 */
  email?: string;
  /** 유선전화 */
  telephone?: string;
  /** 이메일 수신 여부 */
  emailYn?: boolean;
  /**
   * 생년월일
   * @format date
   */
  birthday?: string;
  /** 전화번호 */
  phone?: string;
  /** 전화 수신 여부 */
  phoneYn?: boolean;
  /** 사업명 */
  businessName?: string;
  /** 부서 */
  team?: string;
  /** 주소 */
  address?: string;
  /** 상세주소 */
  addressDetail?: string;
  /** 과정타입 */
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /**
   * 1 : 활성 / -1 : 비활성
   * @format int32
   */
  status?: number;
}

export interface UserUpdatePasswordRequestDto {
  /** 아이디 */
  username: string;
  /** 비밀번호 */
  password: string;
}

/** Review Request DTO */
export interface ReviewRequestDto {
  /**
   * 평점
   * @format double
   */
  score: number;
  /** 내용 */
  content: string;
}

export interface QnaRequestDto {
  /** 제목 */
  subject: string;
  /** 내용 */
  content: string;
  /** 내용 */
  qnaType: "CONTENT" | "PROGRESS" | "SYSTEM" | "CANCEL" | "ETC";
}

export interface PostUpdateRequestDto {
  /** 게시글 분류 */
  courseTypeEnums:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /** 게시글 타입 */
  postType: "NOTICE" | "REVIEW" | "RESOURCE_ROOM";
  /** 제목 */
  subject: string;
  /** 내용 */
  content: string;
  /** 공지 여부 */
  noticeYn: boolean;
}

/** Debate Comment Request DTO */
export interface DebateCommentUpdateRequestDto {
  /** 토론 내용 */
  content: string;
}

/** ExamQuestionRequestDto */
export interface ExamQuestionRequestDto {
  /**
   * 문제 seq
   * @format int64
   */
  questionSeq?: number;
  /** 제출 답안 */
  answerList?: string[];
}

/** ExamQuestionUserSaveRequestDto */
export interface ExamQuestionUserSaveRequestDto {
  questionList?: ExamQuestionRequestDto[];
}

/** ExamQuestionUserSaveRequestDto */
export interface ExamQuestionUserSaveEachRequestDto {
  /**
   * 문제 seq
   * @format int64
   */
  questionSeq?: number;
  /** 제출 답안 */
  answerList?: string[];
}

export interface PostRequestDto {
  /** 게시글 타입 */
  postType: "NOTICE" | "REVIEW" | "RESOURCE_ROOM";
  /** 게시글 분류 */
  courseTypeEnums:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /** 제목 */
  subject: string;
  /** 내용 */
  content: string;
  /** 공지 여부 */
  noticeYn: boolean;
}

/** Otp Auth Request DTO */
export interface OtpAuthRequestDto {
  /** 핸드폰 번호 */
  phoneNum: string;
  /** eval 타입 */
  evalType: "TYPE_PROGRESS" | "TYPE_ENTER";
  /** eval cd */
  evalCd: string;
}

export interface MiniProjectRequestDto {
  /** @format int32 */
  chapter: number;
  /** @format int32 */
  level: number;
  kdcType: "BIO_HEALTH_DATA" | "BIO_HEALTH_DESIGN" | "CHAT_GPT";
  username: string;
}

export interface MiniProjectAnswerRequestDto {
  content?: string;
  username?: string;
  name?: string;
}

export interface LikeRequestDto {
  /** 좋아요 타입 */
  likeType: "TYPE_PRODUCT" | "TYPE_DEBATE" | "TYPE_REVIEW";
  /**
   * 시퀀스
   * @format int64
   */
  seq: number;
}

/** 과제 등록 DTO */
export interface HomeworkUserSaveRequestDto {
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
  /** 임시저장여부(Y/N) 최종제출일 경우 N */
  temp: "Y" | "N";
}

export interface FileResponseDto {
  /**
   * 파일 시퀀스
   * @format int64
   */
  seq: number;
  /** 파일 이름 */
  name: string;
  /** S3 파일명 */
  realName: string;
  /** S3 파일 경로 */
  path: string;
  /**
   * S3 파일 사이즈
   * @format int64
   */
  size: number;
  /** S3 파일 타입 */
  type: string;
  /**
   * 파일 다운로드 수
   * @format int32
   */
  downloadCnt: number;
}

/** Debate Comment Request DTO */
export interface DebateCommentRequestDto {
  /** 토론 내용 */
  content: string;
}

export interface ContactTutorRequestDto {
  /** 이름 */
  name: string;
  /** 지원분야 */
  tutorObjectiveType:
    | "QA"
    | "HOSPITAL"
    | "CERTIFICATE"
    | "SELF_IMPROVEMENT"
    | "LEADERSHIP_CHANGEMANAGEMENT_LABOR"
    | "MARKETING"
    | "INDUSTRIAL_SAFETY_EDUCATION"
    | "SERVICE"
    | "MANAGEMENT"
    | "ACCOUNTING"
    | "DISTRIBUTION"
    | "EARLY_CHILDHOOD_EDUCATION"
    | "ETC";
  /** 지원분야-기타입력 */
  objectiveEtc?: string;
  /** 핸드폰 번호 */
  phone: string;
  /** 이메일 */
  email: string;
  /**
   * 생년월일
   * @format date
   */
  birthday: string;
  /** 마케팅 수신동의 */
  marketingYn?: boolean;
}

export interface ContactPartnerRequestDto {
  /** 이름 */
  name: string;
  /** 핸드폰 번호 */
  phone: string;
  /** 이메일 */
  email: string;
  /** 제휴문의유형 */
  contactPartnerType: "CONSIGNMENT" | "LMS_SOLUTION" | "CONTENTS" | "ETC";
  /** 기업명 */
  companyName: string;
  /** 제목 */
  subject: string;
  /** 문의내용 */
  content: string;
  /** 마케팅 수신동의 */
  marketingYn?: boolean;
}

export interface ContactEducationRequestDto {
  /** 이름 */
  name: string;
  /** 연락처 */
  phone: string;
  /** 이메일 */
  email: string;
  /** 교육문의유형 */
  contactEducationType:
    | "LEGAL_COMPLIANCE"
    | "BUSINESS_OWNER"
    | "KDT"
    | "HRD"
    | "ETC";
  /** 기업유형 */
  companyType: "MAJOR" | "MIDSIZE" | "SMALL" | "ETC";
  /** 소속단체 */
  groupType: "HI_SEOUL" | "INNOBIZ" | "METABUS" | "FP_CENTER" | "NONE";
  /** 직원수 */
  employeeNumberType:
    | "TYPE_1TO50"
    | "TYPE_51TO100"
    | "TYPE_101TO300"
    | "TYPE_301TO500"
    | "TYPE_501TO1000";
  /**
   * 예상 교육인원
   * @format int32
   */
  expectedNum: number;
  /** 소속 */
  team: string;
  /** 방문경로 */
  visitType: "ONLINE" | "EMAIL_ADVERTISEMENT" | "SNS" | "RECOMMEND" | "ETC";
  /** 방문경로-기타 */
  visitEtc?: string;
  /** 기업명 */
  companyName: string;
  /** 직급 */
  rank: string;
  /** 문의내용 */
  content: string;
  /** 마케팅 수신동의 */
  marketingYn?: boolean;
}

/** Code Review Request DTO */
export interface CodeReviewRequestDto {
  /** 질문 */
  question: string;
}

/** 답변 목록 */
export interface Choice {
  /** 답변 */
  message: Message;
  /**
   * 인덱스
   * @format int32
   */
  index: number;
  /** 중단 이유 */
  finish_reason: string;
}

/** Gpt Response Dto */
export interface GptResponseDto {
  /** 답변 목록 */
  choices: Choice[];
}

/** 답변 */
export interface Message {
  role?: string;
  content?: string;
}

export interface AccessTokenRefreshTokenDto {
  /** 엑세스 토큰 */
  accessToken?: string;
  /** 리프레쉬 토큰 */
  refreshToken?: string;
}

export interface AccessTokenRefreshResponseDto {
  /** 엑세스 토큰 */
  accessToken: string;
  /**
   * Access Token Expired Time
   * @format int64
   */
  accessTokenExpiredTime: number;
}

export interface SignUpUserRequestDto {
  /** 유저 아이디 */
  username?: string;
  /** 비밀번호 */
  password?: string;
  /** 전화번호 */
  phone?: string;
  /**
   * 생년월일
   * @format date
   */
  birthday?: string;
  /** 이름 */
  name?: string;
  /** 이메일 */
  email?: string;
  /** 닉네임 */
  nickname?: string;
  /** 이메일 수신여부 */
  emailYn?: boolean;
  /** 전화 수신 여부 */
  phoneYn?: boolean;
  /** 유선전화 */
  telephone?: string;
  /** 유저 등급(어드민 전용) */
  role?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
  /** 우편번호 */
  postCode?: string;
  /** 주소 */
  address?: string;
  /** 상세주소 */
  addressDetail?: string;
  /** 사업명 */
  businessName?: string;
  /** 부서 */
  team?: string;
  /** 토스 본인인증 트랜잭션 아이디 */
  txId?: string;
}

export interface UserDetailResponseDto {
  /**
   * 유저 시퀀스
   * @format int64
   */
  seq: number;
  /** 아이디 */
  username: string;
  /** 이메일 */
  email: string;
  /**
   * 생년월일
   * @format date
   */
  birthday: string;
  /** 전화번호 */
  phone?: string;
  /** 전화 수신 여부 */
  phoneYn?: boolean;
  /** 유선전화 */
  telephone?: string;
  /** 이름 */
  name?: string;
  /** 닉네임 */
  nickname?: string;
  /** s3 파일 */
  s3Files?: FileResponseDto[];
  /** 이메일 수신 여부 */
  emailYn: boolean;
  /** 사업명 */
  businessName?: string;
  /** 부서 */
  team?: string;
  /** 과정타입 */
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /** 주소 */
  address?: string;
  /** 상세주소 */
  addressDetail?: string;
  /**
   * 회원가입일자
   * @format date-time
   */
  createdDtime?: string;
  /**
   * 상태
   * @format int32
   */
  status?: number;
  erole?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
}

export interface SignInRequestDto {
  /** 로그인 타입 */
  loginType?: "TYPE_EMAIL" | "TYPE_KAKAO";
  /** 유저 아이디 */
  username?: string;
  /** 유저 비밀번호 */
  password?: string;
}

export interface SignInResponseDto {
  /** Access Token */
  accessToken?: string;
  /** Fake Refresh Token */
  refreshToken?: string;
  /** Authorization Type */
  type?: string;
  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
  /** 유저 아이디 */
  username?: string;
  /** 유저 권한 */
  erole?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
  /**
   * AT expired time
   * @format int64
   */
  accessTokenExpiredTime?: number;
  /**
   * RT expired time
   * @format int64
   */
  refreshTokenExpiredTime?: number;
}

export interface TargetDateDto {
  targetDate?: string;
}

export interface PageResponseDtoUserDetailResponseDto {
  metadata?: Metadata;
  data?: UserDetailResponseDto[];
}

export interface Metadata {
  /**
   * 현재 페이지 번호
   * @format int32
   */
  page: number;
  /** 다음 페이지의 존재 유무 */
  hasNext: boolean;
  /** 이전 페이지의 존재 유무 */
  hasPrevious: boolean;
  /**
   * 전체 엔티티의 개수
   * @format int64
   */
  totalElements?: number;
  /**
   * 전체 페이지의 개수
   * @format int32
   */
  totalPages?: number;
}

export interface UserFindResponseDto {
  /**
   * 유저 시퀀스
   * @format int64
   */
  seq: number;
  /** 이름 */
  name: string;
  /** 아이디 */
  username: string;
  /** 전화번호 */
  phone?: string;
  /** 사업명 */
  businessName?: string;
  /** 과정타입 */
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /**
   * 상태
   * @format int32
   */
  status?: number;
  erole?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
}

/** Terms Response Dto */
export interface TermResponseDto {
  /**
   * 순번
   * @format int64
   */
  seq: number;
  /** 내용 */
  content: string;
  /** 약관 타입 */
  termTypeEnums:
    | "TYPE_USE"
    | "TYPE_PRIVACY_POLICY"
    | "TYPE_PROVISION_PERSONAL_DATA"
    | "TYPE_MARKETING";
  /**
   * 상태
   * @format int32
   */
  status: number;
}

export interface TotalRatioResponseDto {
  /** @format double */
  totalRatio?: number;
  /** @format int32 */
  inProgressCourse?: number;
}

export interface ContentChasiCompactResponseDto {
  /**
   * 차시 seq
   * @format int64
   */
  seq: number;
  /** 차시 이름 */
  chasiName: string;
  /**
   * 순번
   * @format int32
   */
  sort: number;
}

/** 콘텐츠 차시 리스트 */
export interface ContentChasiResponseDto {
  /**
   * 차시 seq
   * @format int64
   */
  seq: number;
  /** 차시 이름 */
  chasiName: string;
  /** 페이지 리스트 */
  pageList: ContentPageResponseDto[];
  /**
   * 순번
   * @format int32
   */
  sort: number;
}

/** Content Detail Response Dto */
export interface ContentDetailResponseDto {
  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  seq: number;
  /** 콘텐츠 이름 */
  contentName: string;
  /** 콘텐츠 타입 */
  contentTypeEnums: "TYPE_HTML" | "TYPE_MP4";
  /** 콘텐츠 설명 */
  description: string;
  /** 콘텐츠 차시 리스트 */
  chasiList: ContentChasiResponseDto[];
}

/** Content Page Response Dto */
export interface ContentPageDetailResponseDto {
  /**
   * 페이지 시퀀스
   * @format int64
   */
  seq: number;
  /** 페이지 이름 */
  pageName: string;
  /**
   * 순번
   * @format int32
   */
  sort: number;
  /** 영상 경로 */
  path?: string;
  /**
   * 동영상 총 시간(초)
   * @format int64
   */
  videoTime: number;
  /** 진도 정보 */
  progress?: CourseProgressResponseDto;
  contentChasiCompact?: ContentChasiCompactResponseDto;
}

/** Content Page Response Dto */
export interface ContentPageResponseDto {
  /**
   * 페이지 시퀀스
   * @format int64
   */
  seq: number;
  /** 페이지 이름 */
  pageName: string;
  /**
   * 순번
   * @format int32
   */
  sort: number;
  /** 영상 경로 */
  path?: string;
  /**
   * 동영상 총 시간(초)
   * @format int64
   */
  videoTime: number;
  /** 진도 정보 */
  progress?: CourseProgressResponseDto;
}

/** Course Class Response Dto */
export interface CourseClassResponseDto {
  /**
   * 순번
   * @format int64
   */
  seq: number;
  /** Course Response Dto */
  course: CourseResponseDto;
  /**
   * 연도
   * @format int32
   */
  year: number;
  /**
   * 기수
   * @format int32
   */
  step: number;
  /**
   * 수강신청 시작날짜
   * @format date-time
   */
  requestStartDtime: string;
  /**
   * 수강신청 종료날짜
   * @format date-time
   */
  requestEndDtime: string;
  /**
   * 학습 시작날짜
   * @format date-time
   */
  studyStartDtime: string;
  /**
   * 학습 종료날짜
   * @format date-time
   */
  studyEndDtime: string;
}

/** 진도 정보 */
export interface CourseProgressResponseDto {
  /**
   * 진도 시퀀스
   * @format int64
   */
  seq: number;
  /**
   * 진도율
   * @format double
   */
  ratio: number;
  /** 수료여부 */
  complete: boolean;
  /**
   * 최초학습일
   * @format date-time
   */
  studyStartAt: string;
}

/** Course Response Dto */
export interface CourseResponseDto {
  /**
   * 과정 시퀀스
   * @format int64
   */
  seq: number;
  /** 과정 이름 */
  courseName: string;
  /**
   * 학습 기간(비환급 과정시에만 사용)
   * @format int32
   */
  studyDate?: number;
  /**
   * 수강시간
   * @format int32
   */
  lessonTime: number;
  /** NCS 코드 */
  ncsCode: string;
  /** 과정 타입 */
  courseType:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /** 과정 소개 */
  description: string;
  /** 온라인/오프라인 타입 */
  courseOnlineOffline: "ONLINE" | "OFFLINE";
}

/** Course User Response Dto */
export interface CourseUserDetailResponseDto {
  /**
   * 유저 과정 순번
   * @format int64
   */
  seq: number;
  userFindResponseDto: UserFindResponseDto;
  /** Course Class Response Dto */
  courseClass: CourseClassResponseDto;
  /** Content Detail Response Dto */
  content?: ContentDetailResponseDto;
  /**
   * 오프라인 교육 누적시간
   * @format int32
   */
  offlineTotalTime?: number;
  /**
   * 지각/조퇴
   * @format int32
   */
  lateCount?: number;
  /** 수료 여부 */
  complete: boolean;
  /**
   * 총 진도율
   * @format double
   */
  ratio: number;
  /**
   * 총 진도율(초)
   * @format int64
   */
  sumStudyTime: number;
  /** Content Page Response Dto */
  lastViewPage?: ContentPageDetailResponseDto;
  /**
   * 학습 시작날짜
   * @format date-time
   */
  studyStartDtime: string;
  /**
   * 학습 종료날짜
   * @format date-time
   */
  studyEndDtime: string;
  /** 수강 신청 완료 여부 WAIT/COMPLETE */
  courseRequestStatus?: "WAIT" | "COMPLETE";
}

export interface PageResponseDtoReviewResponseDto {
  metadata?: Metadata;
  data?: ReviewResponseDto[];
}

/** Review Response Dto */
export interface ReviewResponseDto {
  /**
   * 시퀀스
   * @format int64
   */
  seq: number;
  /**
   * 추천수
   * @format int64
   */
  likeNum: number;
  /** 유저명 */
  userName: string;
  /**
   * 평점
   * @format double
   */
  score: number;
  /** 내용 */
  content: string;
  /**
   * 생성 시각
   * @format date-time
   */
  createdDtime: string;
  /**
   * 수정 시각
   * @format date-time
   */
  modifiedDtime: string;
}

/** Score Response Dto */
export interface ScoreResponseDto {
  /**
   * 평점
   * @format int32
   */
  score: number;
  /**
   * 비율
   * @format int64
   */
  percent: number;
}

/** Total Review Response Dto */
export interface TotalReviewResponseDto {
  /**
   * 총 리뷰수
   * @format int32
   */
  totalReview: number;
  /**
   * 총 평점
   * @format double
   */
  totalScore: number;
  /** 평점 비율 */
  scoreResponseDtoList: ScoreResponseDto[];
  /** 배스트 리뷰 */
  bestReviewResponseList: ReviewResponseDto[];
}

/** ExamQuestionChoiceResponseDto */
export interface ExamQuestionChoiceResponseDto {
  /**
   * seq
   * @format int64
   */
  seq?: number;
  /** 내용 */
  content?: string;
}

/** Question Detail User Response Dto */
export interface ExamQuestionUserResponseDto {
  /**
   * 시험 문제 seq
   * @format int64
   */
  seq?: number;
  /** 문제명 */
  title?: string;
  /** 문제설명 */
  questionDescription?: string;
  /** 문제유형 */
  questionType?: "CHOICE" | "SUBJECTIVE";
  /** 문항 */
  choice?: ExamQuestionChoiceResponseDto[];
  /** 문항 순서 */
  choiceSort?: number[];
  /** 첨부파일 */
  fileList?: FileResponseDto[];
  /** 유저가 제출한 답안 */
  userAnswer?: string[];
  /** 정답 */
  answer?: string[];
}

/** ExamUserResponseDto */
export interface ExamUserResponseDto {
  /**
   * 시험 시간
   * @format int32
   */
  time?: number;
  /**
   * 시험 seq
   * @format int64
   */
  seq?: number;
  /** 시험명 */
  title?: string;
  /** 문제리스트 */
  questionList?: ExamQuestionUserResponseDto[];
}

export interface PageResponseDtoQnaResponseDto {
  metadata?: Metadata;
  data?: QnaResponseDto[];
}

/** 답변 Dto */
export interface QnaAnswerResponseDto {
  userDetailResponseDto: UserDetailResponseDto;
  /**
   * 답변 순번
   * @format int64
   */
  seq: number;
  /**
   * 질문 순번
   * @format int64
   */
  qnaSeq: number;
  /** 제목 */
  subject: string;
  /** 내용 */
  content: string;
  /**
   * 생성 시각
   * @format date-time
   */
  createdDtime: string;
  /**
   * 수정 시각
   * @format date-time
   */
  modifiedDtime: string;
  /** 작성자 ip */
  regIp: string;
  /** 수정자 ip */
  udpIp: string;
  /** s3 파일 */
  s3Files?: FileResponseDto[];
}

export interface QnaResponseDto {
  userDetailResponseDto: UserDetailResponseDto;
  /**
   * 게시글 순번
   * @format int64
   */
  seq: number;
  /** 제목 */
  subject: string;
  /** 구분 */
  qnaType: "CONTENT" | "PROGRESS" | "SYSTEM" | "CANCEL" | "ETC";
  /** 비밀글 설정 */
  secretYn: boolean;
  /** 내용 */
  content?: string;
  /**
   * 생성 시각
   * @format date-time
   */
  createdDtime: string;
  /**
   * 수정 시각
   * @format date-time
   */
  modifiedDtime: string;
  /** 작성자 ip */
  regIp: string;
  /** 수정자 ip */
  udpIp: string;
  /** 답변 완료 여부 */
  answeredYn: boolean;
  /** s3 파일 */
  s3Files?: FileResponseDto[];
  /** 답변 Dto */
  qnaAnswerResponseDto?: QnaAnswerResponseDto;
}

export interface PageResponseDtoObject {
  metadata?: Metadata;
  data?: object[];
}

export interface Category {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  /** @format int32 */
  sort?: number;
  subject?: string;
  description?: string;
  itemType?: "PRODUCT";
  categoryItemList?: CategoryItemList[];
  parentCategory?: Category;
  subCategory?: Category[];
}

export interface CategoryItemList {
  /** @format int64 */
  seq?: number;
  category?: Category;
  product?: Product;
}

/** 카테고리 */
export interface CategoryResponseDto {
  /**
   * 카테고리 시퀀스
   * @format int64
   */
  seq: number;
  /** 카테고리  제목 */
  subject: string;
  /** 카테고리 세부 설명 */
  description: string;
  /** 카태고리 항목 타입 */
  itemType: "PRODUCT";
  /** 서브 카테고리 리스트 */
  subCategorieDtoList?: CategoryResponseDto[];
  /** 상품 시퀀스 리스트 */
  productResponseDtoList?: ProductResponseDto[];
  productResponseDto?: Category;
}

export interface CertificateItem {
  /** @format int64 */
  seq?: number;
  certificateItemType?:
    | "CERTIFICATE_MARK"
    | "NAME"
    | "COURSE_NAME"
    | "BIRTHDAY"
    | "COURSE_PERIOD"
    | "NCS"
    | "CREATED_DATE";
  /** @format int32 */
  top?: number;
  /** @format int32 */
  left?: number;
  /** @format int32 */
  fontSize?: number;
  certificateTemplate?: CertificateTemplate;
}

export interface CertificateTemplate {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  name?: string;
  content?: string;
  certificateItemList?: CertificateItem[];
  a4Type?: "VERTICAL" | "HORIZONTAL";
  image?: File[];
}

export interface Confirmation {
  /** @format int64 */
  seq?: number;
  courseUser?: CourseUser;
  files?: File[];
  file?: File[];
}

export interface ConfirmationCourse {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  courseClass?: CourseClass;
  businessName?: string;
  courseName?: string;
  /** @format date */
  courseDate?: string;
  startTime?: LocalTime;
  endTime?: LocalTime;
  inTime?: LocalTime;
  outTime?: LocalTime;
  certificateYn?: boolean;
  /** @format int32 */
  studyTime?: number;
}

export interface Content {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  contentName?: string;
  description?: string;
  contentTypeEnums?: "TYPE_HTML" | "TYPE_MP4";
  contentChasiList?: ContentChasi[];
  examList?: Exam[];
  homework?: Homework[];
  debate?: Debate[];
  lectureData?: LectureData[];
  course?: Course;
  /** @format int32 */
  rmtnTcmtSeq?: number;
  rmtnTcmtSecd?: string;
}

export interface ContentChasi {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  chasiName?: string;
  /** @format int32 */
  sort?: number;
  content?: Content;
  contentPageList?: ContentPage[];
  /** @format date */
  submitDueDt?: string;
}

export interface ContentPage {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  pageName?: string;
  /** @format int32 */
  sort?: number;
  path?: string;
  /** @format int64 */
  videoTime?: number;
  progress?: CourseProgress[];
  contentChasi?: ContentChasi;
}

export interface Course {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  courseName?: string;
  /** @format int32 */
  lessonTime?: number;
  ncsCode?: string;
  tutor?: CourseTutorList[];
  contentTutor?: CourseTutorList[];
  /** @format int32 */
  studyDate?: number;
  courseType?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  description?: string;
  purpose?: string;
  target?: string;
  /** @format int32 */
  revise?: number;
  /** @format int32 */
  studyLimit?: number;
  ascStudyYn?: boolean;
  content?: Content;
  certificateTemplate?: CertificateTemplate;
  mainImg?: File[];
  courseClass?: CourseClass[];
  courseOnlineOffline?: "ONLINE" | "OFFLINE";
  businessName?: string;
  jobType?: string;
}

export interface CourseClass {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  course?: Course;
  /** @format int32 */
  year?: number;
  /** @format int32 */
  step?: number;
  /** @format date-time */
  requestStartDtime?: string;
  /** @format date-time */
  requestEndDtime?: string;
  /** @format date-time */
  studyStartDtime?: string;
  /** @format date-time */
  studyEndDtime?: string;
  confirmationCourseList?: ConfirmationCourse[];
}

export interface CourseModule {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  type?: "EXAM" | "HOMEWORK" | "DEBATE";
  /** @format int64 */
  limitScore?: number;
  /** @format int64 */
  limitRatio?: number;
  limitRatioType?: "PERCENT" | "CHASI";
  course?: Course;
  /** @format int64 */
  targetSeq?: number;
  exam?: Exam;
  homework?: Homework;
  debate?: Debate;
}

export interface CourseProgress {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  contentPage?: ContentPage;
  courseUser?: CourseUser;
  courseProgressLogList?: CourseProgressLog[];
  /** @format double */
  ratio?: number;
  complete?: boolean;
  /** @format date-time */
  studyStartAt?: string;
  /** @format date */
  submitDueDt?: string;
}

export interface CourseProgressLog {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  courseProgress?: CourseProgress;
  /** @format int64 */
  studyTime?: number;
  progressStatus?: "START" | "END";
  sessionId?: string;
  accessIp?: string;
}

export interface CourseTutorList {
  /** @format int64 */
  seq?: number;
  courseTutorType?: "TUTOR" | "CONTENT_TUTOR";
  /** @format int32 */
  sort?: number;
  name?: string;
  /** @format int64 */
  price?: number;
  user?: User;
  course?: Course;
}

export interface CourseUser {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  user?: User;
  /** @format int32 */
  offlineTotalTime?: number;
  /** @format int32 */
  lateCount?: number;
  complete?: boolean;
  /** @format double */
  ratio?: number;
  /** @format int64 */
  lastViewPage?: number;
  /** @format date-time */
  studyStartDtime?: string;
  /** @format date-time */
  studyEndDtime?: string;
  /** @format int64 */
  productSeq?: number;
  courseClass?: CourseClass;
  confirmation?: Confirmation;
  courseProgressList?: CourseProgress[];
  files?: File[];
  courseRequestStatus?: "WAIT" | "COMPLETE";
  file?: File[];
}

export interface Debate {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  content?: Content;
  title?: string;
  description?: string;
  fileList?: File[];
  courseModule?: CourseModule;
  debateCommentList?: DebateComment[];
}

export interface DebateComment {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  user?: User;
  debate?: Debate;
  content?: string;
  parent?: DebateComment;
  children?: DebateComment[];
}

export interface Exam {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  title?: string;
  description?: string;
  /** @format int32 */
  time?: number;
  mix?: "Y" | "N";
  autoMark?: "Y" | "N";
  examScoreList?: ExamDistributeScore[];
  examUserList?: ExamUser[];
  content?: Content;
  examType?: "MID_EXAM" | "FINAL_EXAM";
  examQuestionList?: ExamQuestionList[];
  /** @format date */
  submitDueDt?: string;
  examAnswerList?: ExamAnswer[];
  courseModule?: CourseModule;
}

export interface ExamAnswer {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  user?: User;
  exam?: Exam;
  examQuestion?: ExamQuestion;
  answerList?: string[];
  sort?: number[];
}

export interface ExamDistributeScore {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  level?: "HIGH" | "MEDIUM" | "LOW";
  /** @format int32 */
  choiceCnt?: number;
  /** @format int32 */
  subjectiveCnt?: number;
  /** @format float */
  score?: number;
  /** @format float */
  totalScore?: number;
  exam?: Exam;
  default?: boolean;
}

export interface ExamQuestion {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  title?: string;
  answerList?: string[];
  questionDescription?: string;
  questionType?: "CHOICE" | "SUBJECTIVE";
  answerDescription?: string;
  level?: "HIGH" | "MEDIUM" | "LOW";
  questionChoiceList?: ExamQuestionChoice[];
  examQuestionList?: ExamQuestionList[];
  examAnswerList?: ExamAnswer[];
  fileList?: File[];
}

export interface ExamQuestionChoice {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  /** @format int64 */
  sort?: number;
  content?: string;
  examQuestion?: ExamQuestion;
}

export interface ExamQuestionList {
  /** @format int64 */
  seq?: number;
  exam?: Exam;
  examQuestion?: ExamQuestion;
}

export interface ExamUser {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  exam?: Exam;
  user?: User;
  /** @format float */
  score?: number;
  submit?: "Y" | "N";
  mark?: "Y" | "N";
}

export interface File {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  fileName?: string;
  realFileName?: string;
  filePath?: string;
  /** @format int64 */
  fileSize?: number;
  fileType?: string;
  /** @format int32 */
  downloadCnt?: number;
}

export interface Homework {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  title?: string;
  content?: Content;
  description?: string;
  topic?: string;
  answer?: string;
  file?: File[];
  /** @format date */
  submitDueDt?: string;
  courseModuleList?: CourseModule[];
  homeworkUserList?: HomeworkUser[];
}

export interface HomeworkUser {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  user?: User;
  /** @format float */
  score?: number;
  title?: string;
  content?: string;
  fileList?: File[];
  homework?: Homework;
  temp?: "Y" | "N";
}

export interface LectureData {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  title?: string;
  content?: Content;
  description?: string;
  file?: File;
}

export interface LocalTime {
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  second?: number;
  /** @format int32 */
  nano?: number;
}

export interface PageResponseDtoProductResponseDto {
  metadata?: Metadata;
  data?: ProductResponseDto[];
}

export interface Post {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  user?: User;
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  postType?: "NOTICE" | "REVIEW" | "RESOURCE_ROOM";
  subject?: string;
  content?: string;
  publicYn?: boolean;
  noticeYn?: boolean;
  regIp?: string;
  udpIp?: string;
  /** @format int32 */
  hit?: number;
  files?: File[];
}

export interface Product {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  productName?: string;
  content?: string;
  deliveryContent?: string;
  refundContent?: string;
  /** @format int32 */
  typeNum?: number;
  /** @format int32 */
  stock?: number;
  place?: string;
  productTagList?: ProductTagList[];
  /** @format int64 */
  price?: number;
  /** @format int64 */
  hrdPrice?: number;
  categoryItemLists?: CategoryItemList[];
  files?: File[];
  courseClass?: CourseClass;
}

export interface ProductResponseDto {
  /**
   * 상품 시퀀스
   * @format int64
   */
  seq: number;
  /** 상품명 */
  productName: string;
  /**
   * 교육비정가
   * @format int64
   */
  price: number;
  /**
   * 자비부담금
   * @format int64
   */
  hrdPrice: number;
  /** 상품 설명 */
  content: string;
  /** 배송 설명 */
  deliveryContent: string;
  /** 교환 및 환불 설명 */
  refundContent: string;
  /** Course Class Response Dto */
  courseClass?: CourseClassResponseDto;
  /** 썸네일 이미지 또는 동영상 파일 */
  s3Files?: FileResponseDto[];
  /** 등록된 태그 */
  tagList: ProductTagResponseDto[];
  /**
   * 메인에 표시되는 타입
   * @format int32
   */
  typeNum?: number;
  /**
   * 좋아요 갯수
   * @format int64
   */
  likeNum: number;
  /** (로그인한 유저의)좋아요 여부 */
  likeYn?: boolean;
  /**
   * 재고
   * @format int32
   */
  stock?: number;
  /**
   * 등록 유저 개수
   * @format int64
   */
  courseUserCnt?: number;
  /** 장소 */
  place?: string;
  /**
   * 수강신청 시작날짜
   * @format date-time
   */
  requestStartDtime?: string;
  /**
   * 수강신청 종료날짜
   * @format date-time
   */
  requestEndDtime?: string;
  /**
   * 학습시작날짜
   * @format date-time
   */
  studyStartDtime?: string;
  /**
   * 학습종료날짜
   * @format date-time
   */
  studyEndDtime?: string;
  /** 사용자 신청 여부 */
  userRequestStatus?: boolean;
  /** 카테고리 */
  category?: CategoryResponseDto[];
}

export interface ProductTag {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  name?: string;
}

export interface ProductTagList {
  /** @format int64 */
  seq?: number;
  product?: Product;
  productTag?: ProductTag;
}

/** 등록된 태그 */
export interface ProductTagResponseDto {
  /**
   * 태그 시퀀스
   * @format int64
   */
  seq: number;
  /** 태그 이름 */
  name: string;
}

export interface Qna {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  user?: User;
  qnaType?: "CONTENT" | "PROGRESS" | "SYSTEM" | "CANCEL" | "ETC";
  subject?: string;
  secretYn?: boolean;
  qnaAnswer?: QnaAnswer;
  content?: string;
  regIp?: string;
  udpIp?: string;
  files?: File[];
}

export interface QnaAnswer {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  user?: User;
  qna?: Qna;
  subject?: string;
  content?: string;
  regIp?: string;
  udpIp?: string;
  files?: File[];
}

export interface User {
  /** @format date-time */
  createdDtime?: string;
  /** @format date-time */
  modifiedDtime?: string;
  /** @format int32 */
  status?: number;
  /** @format int64 */
  seq?: number;
  /** @format int64 */
  fakeSeq?: number;
  username?: string;
  telephone?: string;
  name?: string;
  /** @format date */
  birthday?: string;
  email?: string;
  phone?: string;
  nickname?: string;
  imageUrl?: string;
  eRole?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
  emailYn?: boolean;
  phoneYn?: boolean;
  /** @format date-time */
  lastPwUpdDtime?: string;
  /** @format date-time */
  withdrawalExpect?: string;
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  regCategory?: "TYPE_EMAIL" | "TYPE_KAKAO";
  post?: Post[];
  qna?: Qna[];
  qnaAnswer?: QnaAnswer[];
  homeworkUserList?: HomeworkUser[];
  files?: File[];
  resNo?: string;
  encResNo?: string;
  nwIno?: string;
  irglbrSe?: string;
  trneeSe?: string;
  postCode?: string;
  address?: string;
  addressDetail?: string;
  businessName?: string;
  team?: string;
  erole?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
}

export interface PageResponseDtoPostResponseDto {
  metadata?: Metadata;
  data?: PostResponseDto[];
}

export interface PostResponseDto {
  userDetailResponseDto: UserDetailResponseDto;
  /**
   * 게시글 순번
   * @format int64
   */
  seq: number;
  /**
   * 상태
   * @format int32
   */
  status: number;
  /** 게시글 분류 */
  courseTypeEnums:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /** 게시글 타입 */
  postType: "NOTICE" | "REVIEW" | "RESOURCE_ROOM";
  /** 제목 */
  subject: string;
  /** 내용 */
  content: string;
  /** 공지 여부 */
  noticeYn: boolean;
  /**
   * 조회수
   * @format int32
   */
  hit: number;
  /**
   * 생성 시각
   * @format date-time
   */
  createdDtime: string;
  /**
   * 수정 시각
   * @format date-time
   */
  modifiedDtime: string;
  /** s3 파일 */
  s3Files?: FileResponseDto[];
  nextPost?: PostResponseDto;
  previousPost?: PostResponseDto;
}

export interface OtpAuthResponseDto {
  /** 요청자 아이피 */
  regIp: string;
  /** 상태 */
  status: boolean;
}

export interface MiniProjectAnswerResponseDto {
  /** @format int64 */
  seq?: number;
  content?: string;
  username?: string;
  name?: string;
}

export interface MiniProjectQuestionResponseDto {
  /** @format int64 */
  seq?: number;
  /** @format int32 */
  chapter?: number;
  /** @format int32 */
  level?: number;
  subject?: string;
  content?: string;
  kdcType?: "BIO_HEALTH_DATA" | "BIO_HEALTH_DESIGN" | "CHAT_GPT";
}

export interface MiniProjectResponseDto {
  /** @format int64 */
  seq: number;
  /** @format int32 */
  chapter: number;
  /** @format int32 */
  level: number;
  kdcType: "BIO_HEALTH_DATA" | "BIO_HEALTH_DESIGN" | "CHAT_GPT";
  username: string;
  isComplete: boolean;
  /** s3 파일 */
  s3Files?: FileResponseDto[];
  miniProjectAnswer?: MiniProjectAnswerResponseDto;
  miniProjectQuestion?: MiniProjectQuestionResponseDto;
}

export interface PageResponseDtoMiniProjectResponseDto {
  metadata?: Metadata;
  data?: MiniProjectResponseDto[];
}

export interface MiniProjectTutorDto {
  /** @format int64 */
  id?: number;
  kdcType?: "BIO_HEALTH_DATA" | "BIO_HEALTH_DESIGN" | "CHAT_GPT";
  username?: string;
}

export interface MainDisplayResponseDto {
  /**
   * 시퀀스
   * @format int64
   */
  seq: number;
  /**
   * 순번
   * @format int32
   */
  sort: number;
  /** 제목 */
  subject: string;
  /** 메인태그 */
  mainTag: string;
  /**
   * 최상위 카테고리 시퀀스
   * @format int64
   */
  firstCategorySeq: number;
  /**
   * 카테고리 시퀀스
   * @format int64
   */
  categorySeq: number;
  /** 상품 Dto */
  productResponseDtoList: ProductResponseDto[];
}

export interface PageResponseDtoProductLikeResponseDto {
  metadata?: Metadata;
  data?: ProductLikeResponseDto[];
}

export interface ProductLikeResponseDto {
  /**
   * 시퀀스
   * @format int64
   */
  seq: number;
  /** 좋아요 타입 */
  likeType: "TYPE_PRODUCT" | "TYPE_DEBATE" | "TYPE_REVIEW";
  productResponseDto?: ProductResponseDto;
}

export interface LectureDataResponseDto {
  /**
   * seq
   * @format int64
   */
  seq: number;
  /**
   * 콘텐츠
   * @format int64
   */
  contentSeq: number;
  /** 자료명 */
  title: string;
  /** 자료 설명 */
  description: string;
  file?: FileResponseDto;
  /**
   * 등록일
   * @format date-time
   */
  createdDtime?: string;
}

export interface PageResponseDtoLectureDataResponseDto {
  metadata?: Metadata;
  data?: LectureDataResponseDto[];
}

export interface LectureDataUserResponseDto {
  lectureData: LectureDataResponseDto;
  prevLectureData?: LectureDataResponseDto;
  nextLectureData?: LectureDataResponseDto;
}

export interface HomeworkUserResponseDto {
  /**
   * 과제 seq
   * @format int64
   */
  seq: number;
  /** 최소 진도율 타입 (차시 or 전체 최소진도율 %) */
  limitRatioType?: "PERCENT" | "CHASI";
  /**
   * 최소 이수 기준
   * @format int64
   */
  limitScore?: number;
  /**
   * 최소 진도율(최소 진도율 타입이 chasi 일 경우 몇차시인지)
   * @format int64
   */
  limitRatio?: number;
  /** 과제명 */
  title: string;
  /**
   * 제출일
   * @format date
   */
  submitDue?: string;
  /**
   * 성적
   * @format float
   */
  score: number;
  /** 상태 */
  status: "Y" | "N";
}

export interface PageResponseDtoHomeworkUserResponseDto {
  metadata?: Metadata;
  data?: HomeworkUserResponseDto[];
}

export interface HomeworkUserDetailResponseDto {
  /**
   * 과제 seq
   * @format int64
   */
  seq: number;
  /**
   * 최소 진도율(최소 진도율 타입이 chasi 일 경우 몇차시인지)
   * @format int64
   */
  limitRatio?: number;
  /**
   * 최소 이수 기준
   * @format int64
   */
  limitScore?: number;
  /** 최소 진도율 타입 (차시 or 전체 최소진도율 %) */
  limitRatioType?: "PERCENT" | "CHASI";
  /** 과제명 */
  title: string;
  /**
   * 제출일
   * @format date
   */
  submitDue?: string;
  /** 상태 */
  status: "Y" | "N";
  /** 과제 설명 - 필독사항 */
  description: string;
  /** 평가 주제 - 평가문항 */
  topic: string;
  /** 제출 내역 */
  temp?: HomeworkUserTempResponseDto;
}

/** 제출 내역 */
export interface HomeworkUserTempResponseDto {
  /**
   * 파일 seq
   * @format int64
   */
  seq?: number;
  /** 제목 */
  title?: string;
  /** 첨부파일 */
  fileList?: FileResponseDto[];
  /** 내용 */
  content?: string;
}

/** FAQ Response DTO */
export interface FaqResponseDto {
  /** @format int64 */
  seq: number;
  subject: string;
  content: string;
  regIp: string;
  udpIp: string;
  /**
   * 생성 시각
   * @format date-time
   */
  createdDtime: string;
  /**
   * 수정 시각
   * @format date-time
   */
  modifiedDtime: string;
  faqTagResponseDtoList?: FaqTagResponseDto[];
}

/** FAQ Tag Respones DTO */
export interface FaqTagResponseDto {
  /** @format int64 */
  seq: number;
  tagName: string;
  /** @format int32 */
  status: number;
}

export interface PageResponseDtoFaqResponseDto {
  metadata?: Metadata;
  data?: FaqResponseDto[];
}

/** ExamUserListResponseDto */
export interface ExamUserListResponseDto {
  /**
   * 시험 seq
   * @format int64
   */
  seq?: number;
  /** 시험명 */
  title?: string;
  /**
   * 응시 일(yyyy-MM-dd HH:mm:ss)
   * @format date-time
   */
  time?: string;
  /**
   * 시험 점수
   * @format float
   */
  score?: number;
  /** 응시 여부 */
  status?: "Y" | "N";
}

export interface PageResponseDtoExamUserListResponseDto {
  metadata?: Metadata;
  data?: ExamUserListResponseDto[];
}

/** ExamUserDetailResponseDto */
export interface ExamUserDetailResponseDto {
  /**
   * 시험 seq
   * @format int64
   */
  seq?: number;
  /** 시험명 */
  title?: string;
  /**
   * 시험 점수
   * @format float
   */
  score?: number;
  /** 응시 여부 */
  status?: "Y" | "N";
  /**
   * 시험 시간
   * @format int32
   */
  time: number;
  /**
   * 문제 수
   * @format int32
   */
  questionCnt: number;
  /** 시험 설명(유의 사항) */
  description?: string;
}

export interface DebateUserResponseDto {
  /**
   * seq
   * @format int64
   */
  seq: number;
  /** 토론 명 */
  title: string;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /**
   * 참여자
   * @format int32
   */
  userCnt: number;
  /** 진행 가능 여부(Y/N) */
  progressStatus?: "Y" | "N";
}

export interface PageResponseDtoDebateUserResponseDto {
  metadata?: Metadata;
  data?: DebateUserResponseDto[];
}

export interface DebateUserDetailResponseDto {
  /**
   * seq
   * @format int64
   */
  seq: number;
  /** 토론 명 */
  title: string;
  /** 토론 내용 */
  content: string;
}

export interface DebateCommentListResponseDto {
  /** 댓글리스트 */
  commentList: PageDebateCommentResponseDto;
  /** 댓글 유저 정보 */
  userList?: DebateCommentUserResponseDto[];
}

export interface DebateCommentResponseDto {
  /**
   * seq
   * @format int64
   */
  seq: number;
  /** 댓글 작성자 아이디 */
  id: string;
  /** 댓글 내용 */
  content: string;
  /**
   * 좋아요 개수
   * @format int64
   */
  like: number;
  /**
   * 답글 개수
   * @format int32
   */
  reply: number;
  /**
   * 등록일
   * @format date-time
   */
  createdDtime?: string;
}

/** 댓글 유저 정보 */
export interface DebateCommentUserResponseDto {
  /**
   * seq(fake)
   * @format int64
   */
  seq: number;
  /** 이름 */
  name: string;
}

/** 댓글리스트 */
export interface PageDebateCommentResponseDto {
  /** @format int32 */
  totalPages?: number;
  /** @format int64 */
  totalElements?: number;
  /** @format int32 */
  size?: number;
  content?: DebateCommentResponseDto[];
  /** @format int32 */
  number?: number;
  sort?: SortObject;
  first?: boolean;
  last?: boolean;
  /** @format int32 */
  numberOfElements?: number;
  pageable?: PageableObject;
  empty?: boolean;
}

export interface PageableObject {
  /** @format int64 */
  offset?: number;
  sort?: SortObject;
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  paged?: boolean;
  unpaged?: boolean;
}

export interface SortObject {
  empty?: boolean;
  sorted?: boolean;
  unsorted?: boolean;
}

export interface PageResponseDtoCourseResponseDto {
  metadata?: Metadata;
  data?: CourseResponseDto[];
}

/** CourseListenResponseDto */
export interface CourseListenResponseDto {
  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq: number;
  /** 유저 아이디 */
  userName: string;
  /** 유저 이름 */
  name: string;
  /** 유저 이메일 */
  email: string;
  /** 유저 핸드폰 */
  phone: string;
  /** Course User Response Dto */
  courseUser?: CourseUserResponseDto;
}

/** Course User Response Dto */
export interface CourseUserResponseDto {
  /**
   * 유저 과정 순번
   * @format int64
   */
  seq: number;
  userFindResponseDto: UserFindResponseDto;
  /** 수료 여부 */
  complete: boolean;
  /**
   * 총 진도율
   * @format double
   */
  ratio: number;
  /**
   * 총 진도율(초)
   * @format int64
   */
  sumStudyTime: number;
  /**
   * 남은수강일수
   * @format int64
   */
  daysRemaining: number;
  /** Course Class Response Dto */
  courseClass: CourseClassResponseDto;
  /**
   * 학습 시작날짜
   * @format date-time
   */
  studyStartDtime: string;
  /**
   * 학습 종료날짜
   * @format date-time
   */
  studyEndDtime: string;
  /** 수강상태 */
  courseUserStatus?: "TYPE_IN_PROGRESS" | "TYPE_DONE" | "TYPE_WAITING";
  /** 수강 신청 완료 여부 WAIT/COMPLETE */
  courseRequestStatus?: "WAIT" | "COMPLETE";
}

export interface PageResponseDtoCourseListenResponseDto {
  metadata?: Metadata;
  data?: CourseListenResponseDto[];
}

/** Course Detail Response Dto */
export interface CourseDetailResponseDto {
  /**
   * 과정 시퀀스
   * @format int64
   */
  seq: number;
  /** 과정명 */
  courseName: string;
  /**
   * 교육시간
   * @format int32
   */
  lessonTime: number;
  /** NCS 코드 */
  ncsCode: string;
  /** 과정 타입 */
  courseType:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  /** 과정 소개 */
  description: string;
  /** 교강사 */
  tutorResponseDtoList: CourseTutorResponseDto[];
  /** 내용 전문가 */
  contentTutorResponseDtoList: CourseTutorResponseDto[];
  /** 학습목표 */
  purpose: string;
  /** 교육대상 */
  target: string;
  /**
   * 복습
   * @format int32
   */
  revise: number;
  /**
   * 학습제한
   * @format int32
   */
  studyLimit: number;
  /** 순차학습여부 */
  ascStudyYn: boolean;
  mainImg: FileResponseDto;
  /**
   * 수료증 템플릿 시퀀스
   * @format int64
   */
  certificateTemplateSeq: number;
  /** 온라인/오프라인 타입 */
  courseOnlineOffline: "ONLINE" | "OFFLINE";
  /** 사업명 */
  businessName?: string;
  /** 직무분야 */
  jobType?: string;
  /**
   * 학습 기간
   * @format int32
   */
  studyDate?: number;
}

/** Course Tutor Response Dto */
export interface CourseTutorResponseDto {
  /**
   * 시퀀스
   * @format int64
   */
  seq: number;
  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq: number;
  /** 튜터 타입 */
  courseTutorType: "TUTOR" | "CONTENT_TUTOR";
  /**
   * 순서
   * @format int32
   */
  sort: number;
  /** 강사명 */
  name: string;
  /**
   * 정산 금액
   * @format int64
   */
  price: number;
}

/** 온오프라인 Course 통계 dto */
export interface CourseOnOfflineStatisticsResponseDto {
  /**
   * 온라인 통계
   * @format double
   */
  online: number;
  /**
   * 오프라인 통계
   * @format double
   */
  offline: number;
}

export interface PageResponseDtoCourseUserResponseDto {
  metadata?: Metadata;
  data?: CourseUserResponseDto[];
}

/** Banner Response Dto */
export interface BannerResponseDto {
  /**
   * 순번
   * @format int64
   */
  seq: number;
  /** 이름 */
  name: string;
  /**
   * 배너 순서
   * @format int32
   */
  sort: number;
  /**
   * 대기시간
   * @format float
   */
  duration: number;
  /** 경로 */
  path: string;
  /**
   * 상태
   * @format int32
   */
  status: number;
  pcFile?: FileResponseDto;
  tabletFile?: FileResponseDto;
  mobileFile?: FileResponseDto;
}

export interface PageResponseDtoBannerResponseDto {
  metadata?: Metadata;
  data?: BannerResponseDto[];
}

export interface UserAuthResponseDto {
  /** 토스 본인 인증 창 url */
  authUrl: string;
  /** 토스 트랜잭션 아이디 */
  txId: string;
}

export interface UserAuthStatusResponseDto {
  /** 토스 트랜잭션 아이디 */
  txId: string;
  /** 인증 상태의 종류 */
  status: "REQUESTED" | "IN_PROGRESS" | "COMPLETED" | "EXPIRED";
}

export interface UserAuthResultResponseDto {
  /** 토스 트랜잭션 아이디 */
  txId: string;
  /** 인증 상태의 종류 */
  status: "REQUESTED" | "IN_PROGRESS" | "COMPLETED" | "EXPIRED";
  /** 이름 */
  name?: string;
  /** 생년월일 */
  birthday?: string;
}

export interface AuthLoginResponseDto {
  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq: number;
  /** 이름(닉네임) */
  nickname: string;
  /** 이메일 */
  email: string;
  /** 토큰 타입 */
  tokenType: string;
  /** 엑세스 토큰 */
  accessToken: string;
  /** 리프레쉬 토큰 */
  refreshToken: string;
  /** 이메일 동의 */
  emailYn: boolean;
  /**
   * 상태
   * @format int32
   */
  status: number;
  erole?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
}

export interface UserNameDuplicateCheckResponseDto {
  /** 사용 가능 여부(사용 : true, 불가능 : false) */
  result?: boolean;
}

export interface FindPostParams {
  /** @default false */
  detailInfo?: boolean;
  /** @format int64 */
  postSeq: number;
}

export interface FindOtpAuthParams {
  evalType: "TYPE_PROGRESS" | "TYPE_ENTER";
  /** @format int64 */
  courseUserSeq: number;
}

export interface FindMiniProjectTutorParams {
  username: string;
}

export interface CreateMiniProjectTutorParams {
  kdcType: "BIO_HEALTH_DATA" | "BIO_HEALTH_DESIGN" | "CHAT_GPT";
  username: string;
}

export interface DeleteFilesParams {
  fileSeqList: number[];
  bbsType:
    | "TYPE_QNA_QUESTION"
    | "TYPE_QNA_ANSWER"
    | "TYPE_BANNER_PC"
    | "TYPE_BANNER_MOBILE"
    | "TYPE_BANNER_TABLET"
    | "TYPE_POST"
    | "TYPE_USER"
    | "TYPE_PRODUCT"
    | "TYPE_CERTIFICATE"
    | "TYPE_TUTOR_LICENSE"
    | "TYPE_TUTOR_RESUME"
    | "TYPE_PARTNER_PLAN"
    | "TYPE_EDUCATION_BUSINESS_REGISTRATION"
    | "TYPE_HOMEWORK"
    | "TYPE_COURSE_MAIN_IMAGE"
    | "TYPE_CERTIFICATE_TEMPLATE"
    | "TYPE_CONFIRMATION"
    | "TYPE_CONFIRMATION_PROD"
    | "TYPE_MINI_PROJECT";
  /** @format int64 */
  bbsSeq: number;
}

export interface GetDebateCommentParams {
  /** @format int64 */
  parentSeq?: number;
  /** @format int32 */
  page: number;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  /** @format int64 */
  debateSeq: number;
}

export interface CreateDebateCommentParams {
  /** @format int64 */
  parentSeq?: number;
  /** @format int64 */
  debateSeq: number;
}

export interface FindUserPageParams {
  /** @format int32 */
  page: number;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  searchType?:
    | "TYPE_USERNAME"
    | "TYPE_BUSINESSNAME"
    | "TYPE_TEAM"
    | "TYPE_NAME";
  searchString?: string;
  /** @format int32 */
  status?: number;
  eRole?: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_TUTOR";
}

export interface FindUserIdParams {
  phone: string;
}

export interface FindAllReviewParams {
  /** @format int32 */
  page: number;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  orderByBest: boolean;
  /** @format int64 */
  productSeq: number;
}

export interface FindReviewScoreParams {
  /**
   * @format int32
   * @default 2
   */
  bestReviewNum?: number;
  /** @format int64 */
  productSeq: number;
}

export interface GetQnaPageParams {
  /** @format int32 */
  page: number;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  searchType?: "SUBJECT" | "CONTENT" | "USERNAME";
  searchString?: string;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  /** @format int64 */
  userSeq?: number;
  answeredYn?: boolean;
}

export interface FindMyQnaParams {
  /** @format int32 */
  page: number;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  searchType?: "SUBJECT" | "CONTENT" | "USERNAME";
  searchString?: string;
  answeredYn?: boolean;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface FindProductsParams {
  /** @format int32 */
  page: number;
  searchString?: string;
  /** @format int64 */
  categorySeq?: number;
  /** @format int32 */
  typeNum?: number;
  courseOnlineOfflineEnum?: "ONLINE" | "OFFLINE";
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  applyPossible?: boolean;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface GetPostPageParams {
  /** @format int32 */
  page: number;
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  postType?: "NOTICE" | "REVIEW" | "RESOURCE_ROOM";
  searchType?: "SUBJECT" | "CONTENT";
  searchString?: string;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface FindMiniProjectsParams {
  kdcType: "BIO_HEALTH_DATA" | "BIO_HEALTH_DESIGN" | "CHAT_GPT";
  username: string;
}

export interface FindMiniProjectsTutorParams {
  /**
   * @format int32
   * @default 1
   */
  page?: number;
  searchString?: string;
  /** @default "desc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  username: string;
  isAnswer: boolean;
}

export interface FindMiniProjectQuestionsParams {
  kdcType: "BIO_HEALTH_DATA" | "BIO_HEALTH_DESIGN" | "CHAT_GPT";
}

export interface FindMiniProjectParams {
  username: string;
  /** @format int64 */
  miniProjectSeq: number;
}

export interface FindMyLikePageParams {
  /** @format int32 */
  page: number;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  /** @format int64 */
  userSeq: number;
}

export interface GetLectureDataPageParams {
  /** @format int32 */
  page: number;
  /** @format int64 */
  courseSeq: number;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface GetHomeworkUserPageParams {
  /** @format int32 */
  page: number;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  /** @format int64 */
  courseSeq: number;
}

export interface GetFaqPageParams {
  /** @format int32 */
  page: number;
  /** @format int64 */
  tagSeq?: number;
  searchString?: string;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface GetExamPageParams {
  /** @format int32 */
  page: number;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  /** @format int64 */
  courseSeq: number;
}

export interface GetDebatePageParams {
  userName: string;
  /** @format int32 */
  page: number;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  /** @format int64 */
  courseSeq: number;
}

export interface FindCoursesParams {
  /** @format int32 */
  page: number;
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  searchType?: "TYPE_COURSE_NAME" | "TYPE_DESCRIPTION";
  searchString?: string;
  courseOnlineOfflineEnums?: "ONLINE" | "OFFLINE";
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface FindCourseListenUserParams {
  /** @format int32 */
  page: number;
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
  /** @format int64 */
  courseSeq: number;
}

export interface GetExamExcelParams {
  courseOnlineOfflineEnums?: "ONLINE" | "OFFLINE";
  courseTypeEnums?:
    | "TYPE_BASIC"
    | "TYPE_MANAGEMENT"
    | "TYPE_DOLBOM"
    | "TYPE_BUSINESS"
    | "TYPE_CONSORTIUM"
    | "TYPE_UNEMPLOYMENT"
    | "TYPE_WORKER";
  searchType?: "ALL" | "COURSE_NAME" | "USERNAME" | "NAME";
  searchString?: string;
  /** @format date */
  studyStartedAt?: string;
  /** @format date */
  studyEndedAt?: string;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /** @default "desc | asc" */
  sort?: string;
}

export interface FindCourseUsersParams {
  /** @format int32 */
  page: number;
  courseUserStatus?: "TYPE_IN_PROGRESS" | "TYPE_DONE" | "TYPE_WAITING";
  complete?: boolean;
  /** @format date */
  studyStartedAt?: string;
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  searchString?: string;
  courseRequestStatus?: "WAIT" | "COMPLETE";
  courseOnlineOfflineEnums?: "ONLINE" | "OFFLINE";
  /** @default "desc | asc" */
  sort?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface FindAllCategoryParams {
  itemType?: "PRODUCT";
  categorySearchType: "TYPE_HEADER" | "TYPE_ALL";
}

export interface FindBannerPageParams {
  /** @format int32 */
  page: number;
  bannerPagingType: "TYPE_SORT" | "TYPE_ASCENDING" | "TYPE_DESCENDING";
  /** @format date */
  fromDtime?: string;
  /** @format date */
  toDtime?: string;
  /**
   * @format int32
   * @default 10
   */
  elementCnt?: number;
}

export interface UserTossAuthStatusParams {
  txId: string;
}

export interface UserTossAuthResultParams {
  txId: string;
}

export interface SignInFromKakaoParams {
  code: string;
}
