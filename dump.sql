--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: post_likes; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."post_likes" (
    "id" integer NOT NULL,
    "post_id" integer NOT NULL,
    "user_id" integer NOT NULL
);


ALTER TABLE public.post_likes OWNER TO qbeaofxarsjuqj;

--
-- Name: post_likes_id_seq; Type: SEQUENCE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE SEQUENCE "public"."post_likes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_likes_id_seq OWNER TO qbeaofxarsjuqj;

--
-- Name: post_likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER SEQUENCE "public"."post_likes_id_seq" OWNED BY "public"."post_likes"."id";


--
-- Name: post_tags; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."post_tags" (
    "id" integer NOT NULL,
    "post_id" integer NOT NULL,
    "tag" "text" NOT NULL
);


ALTER TABLE public.post_tags OWNER TO qbeaofxarsjuqj;

--
-- Name: post_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE SEQUENCE "public"."post_tags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_tags_id_seq OWNER TO qbeaofxarsjuqj;

--
-- Name: post_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER SEQUENCE "public"."post_tags_id_seq" OWNED BY "public"."post_tags"."id";


--
-- Name: posts; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."posts" (
    "id" integer NOT NULL,
    "url_id" integer NOT NULL,
    "content" "text",
    "author_id" integer NOT NULL
);


ALTER TABLE public.posts OWNER TO qbeaofxarsjuqj;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE SEQUENCE "public"."posts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO qbeaofxarsjuqj;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER SEQUENCE "public"."posts_id_seq" OWNED BY "public"."posts"."id";


--
-- Name: urls; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."urls" (
    "id" integer NOT NULL,
    "url" "text" NOT NULL,
    "title" "text" NOT NULL,
    "image" "text" NOT NULL,
    "description" "text" NOT NULL
);


ALTER TABLE public.urls OWNER TO qbeaofxarsjuqj;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE SEQUENCE "public"."urls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO qbeaofxarsjuqj;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER SEQUENCE "public"."urls_id_seq" OWNED BY "public"."urls"."id";


--
-- Name: users; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."users" (
    "id" integer NOT NULL,
    "name" character varying(60) NOT NULL,
    "email" character varying(80) NOT NULL,
    "password" "text" NOT NULL,
    "pic_url" "text" NOT NULL
);


ALTER TABLE public.users OWNER TO qbeaofxarsjuqj;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE SEQUENCE "public"."users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO qbeaofxarsjuqj;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER SEQUENCE "public"."users_id_seq" OWNED BY "public"."users"."id";


--
-- Name: post_likes id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_likes" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."post_likes_id_seq"'::"regclass");


--
-- Name: post_tags id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_tags" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."post_tags_id_seq"'::"regclass");


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."posts" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."posts_id_seq"'::"regclass");


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."urls" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."urls_id_seq"'::"regclass");


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."users" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."users_id_seq"'::"regclass");


--
-- Data for Name: post_likes; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."post_likes" ("id", "post_id", "user_id") FROM stdin;
\.


--
-- Data for Name: post_tags; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."post_tags" ("id", "post_id", "tag") FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."posts" ("id", "url_id", "content", "author_id") FROM stdin;
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."urls" ("id", "url", "title", "image", "description") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."users" ("id", "name", "email", "password", "pic_url") FROM stdin;
\.


--
-- Name: post_likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."post_likes_id_seq"', 1, false);


--
-- Name: post_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."post_tags_id_seq"', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 1, false);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."urls_id_seq"', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 1, false);


--
-- Name: post_likes post_likes_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_likes"
    ADD CONSTRAINT "post_likes_pkey" PRIMARY KEY ("id");


--
-- Name: post_tags post_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_tags"
    ADD CONSTRAINT "post_tags_pkey" PRIMARY KEY ("id");


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."urls"
    ADD CONSTRAINT "urls_pkey" PRIMARY KEY ("id");


--
-- Name: urls urls_url_key; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."urls"
    ADD CONSTRAINT "urls_url_key" UNIQUE ("url");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_email_key" UNIQUE ("email");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");


--
-- Name: post_likes post_likes_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_likes"
    ADD CONSTRAINT "post_likes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id");


--
-- Name: post_likes post_likes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_likes"
    ADD CONSTRAINT "post_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");


--
-- Name: post_tags post_tags_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_tags"
    ADD CONSTRAINT "post_tags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id");


--
-- Name: posts posts_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id");


--
-- Name: posts posts_url_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_url_id_fkey" FOREIGN KEY ("url_id") REFERENCES "public"."urls"("id");


--
-- PostgreSQL database dump complete
--

