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
-- Name: comments; Type: TABLE; Schema: public; Owner: tbelrlezayruhf
--

CREATE TABLE "public"."comments" (
    "id" integer NOT NULL,
    "comment" "text" NOT NULL,
    "post_id" integer NOT NULL,
    "user_id" integer NOT NULL
);


ALTER TABLE public.comments OWNER TO tbelrlezayruhf;

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: tbelrlezayruhf
--

CREATE SEQUENCE "public"."comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comments_id_seq OWNER TO tbelrlezayruhf;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tbelrlezayruhf
--

ALTER SEQUENCE "public"."comments_id_seq" OWNED BY "public"."comments"."id";


--
-- Name: post_likes; Type: TABLE; Schema: public; Owner: tbelrlezayruhf
--

CREATE TABLE "public"."post_likes" (
    "id" integer NOT NULL,
    "post_id" integer NOT NULL,
    "user_id" integer NOT NULL
);


ALTER TABLE public.post_likes OWNER TO tbelrlezayruhf;

--
-- Name: post_likes_id_seq; Type: SEQUENCE; Schema: public; Owner: tbelrlezayruhf
--

CREATE SEQUENCE "public"."post_likes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_likes_id_seq OWNER TO tbelrlezayruhf;

--
-- Name: post_likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tbelrlezayruhf
--

ALTER SEQUENCE "public"."post_likes_id_seq" OWNED BY "public"."post_likes"."id";


--
-- Name: posts; Type: TABLE; Schema: public; Owner: tbelrlezayruhf
--

CREATE TABLE "public"."posts" (
    "id" integer NOT NULL,
    "url_id" integer NOT NULL,
    "content" "text",
    "author_id" integer NOT NULL
);


ALTER TABLE public.posts OWNER TO tbelrlezayruhf;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: tbelrlezayruhf
--

CREATE SEQUENCE "public"."posts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO tbelrlezayruhf;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tbelrlezayruhf
--

ALTER SEQUENCE "public"."posts_id_seq" OWNED BY "public"."posts"."id";


--
-- Name: tag_mentions; Type: TABLE; Schema: public; Owner: tbelrlezayruhf
--

CREATE TABLE "public"."tag_mentions" (
    "id" integer NOT NULL,
    "post_id" integer,
    "tag_id" integer
);


ALTER TABLE public.tag_mentions OWNER TO tbelrlezayruhf;

--
-- Name: tag_mentions_id_seq; Type: SEQUENCE; Schema: public; Owner: tbelrlezayruhf
--

CREATE SEQUENCE "public"."tag_mentions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tag_mentions_id_seq OWNER TO tbelrlezayruhf;

--
-- Name: tag_mentions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tbelrlezayruhf
--

ALTER SEQUENCE "public"."tag_mentions_id_seq" OWNED BY "public"."tag_mentions"."id";


--
-- Name: tags; Type: TABLE; Schema: public; Owner: tbelrlezayruhf
--

CREATE TABLE "public"."tags" (
    "id" integer NOT NULL,
    "name" "text" NOT NULL
);


ALTER TABLE public.tags OWNER TO tbelrlezayruhf;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: tbelrlezayruhf
--

CREATE SEQUENCE "public"."tags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO tbelrlezayruhf;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tbelrlezayruhf
--

ALTER SEQUENCE "public"."tags_id_seq" OWNED BY "public"."tags"."id";


--
-- Name: urls; Type: TABLE; Schema: public; Owner: tbelrlezayruhf
--

CREATE TABLE "public"."urls" (
    "id" integer NOT NULL,
    "url" "text" NOT NULL,
    "title" "text",
    "image" "text" NOT NULL,
    "description" "text" NOT NULL
);


ALTER TABLE public.urls OWNER TO tbelrlezayruhf;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: tbelrlezayruhf
--

CREATE SEQUENCE "public"."urls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO tbelrlezayruhf;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tbelrlezayruhf
--

ALTER SEQUENCE "public"."urls_id_seq" OWNED BY "public"."urls"."id";


--
-- Name: users; Type: TABLE; Schema: public; Owner: tbelrlezayruhf
--

CREATE TABLE "public"."users" (
    "id" integer NOT NULL,
    "name" character varying(60) NOT NULL,
    "email" character varying(80) NOT NULL,
    "password" "text" NOT NULL,
    "pic_url" "text" NOT NULL
);


ALTER TABLE public.users OWNER TO tbelrlezayruhf;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tbelrlezayruhf
--

CREATE SEQUENCE "public"."users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tbelrlezayruhf;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tbelrlezayruhf
--

ALTER SEQUENCE "public"."users_id_seq" OWNED BY "public"."users"."id";


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."comments" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."comments_id_seq"'::"regclass");


--
-- Name: post_likes id; Type: DEFAULT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."post_likes" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."post_likes_id_seq"'::"regclass");


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."posts" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."posts_id_seq"'::"regclass");


--
-- Name: tag_mentions id; Type: DEFAULT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."tag_mentions" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."tag_mentions_id_seq"'::"regclass");


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."tags" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."tags_id_seq"'::"regclass");


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."urls" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."urls_id_seq"'::"regclass");


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."users" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."users_id_seq"'::"regclass");


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: tbelrlezayruhf
--

COPY "public"."comments" ("id", "comment", "post_id", "user_id") FROM stdin;
\.


--
-- Data for Name: post_likes; Type: TABLE DATA; Schema: public; Owner: tbelrlezayruhf
--

COPY "public"."post_likes" ("id", "post_id", "user_id") FROM stdin;
62	23	2
64	18	2
80	24	4
81	23	4
83	18	4
84	18	6
50	17	4
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: tbelrlezayruhf
--

COPY "public"."posts" ("id", "url_id", "content", "author_id") FROM stdin;
17	3	Ótimo artigo sobre variáveis de ambiente em #react.	2
18	12	Artigo sobre #react hooks.	2
23	17	Artigo sobre #Javascript da concorrência!	2
24	18	Ótimas dicas de #display # flex para #css.	2
\.


--
-- Data for Name: tag_mentions; Type: TABLE DATA; Schema: public; Owner: tbelrlezayruhf
--

COPY "public"."tag_mentions" ("id", "post_id", "tag_id") FROM stdin;
1	17	1
2	18	1
6	23	4
7	24	5
8	24	2
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: tbelrlezayruhf
--

COPY "public"."tags" ("id", "name") FROM stdin;
1	#react
2	#css
4	#Javascript
5	#display
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: tbelrlezayruhf
--

COPY "public"."urls" ("id", "url", "title", "image", "description") FROM stdin;
3	https://dev.to/guiselair/utilizando-variaveis-de-ambiente-com-create-react-app-5ckc	Utilizando variáveis de ambiente no ReactJS	https://dev.to/social_previews/article/541624.png	Fala clã! Tudo tranquilo? Depois de um tempo sem d
12	https://pt-br.reactjs.org/docs/hooks-intro.html	Introdução aos Hooks – React	https://reactjs.org/logo-og.png	A JavaScript library for building user interfaces
17	https://blog.betrybe.com/javascript/	Javascript: o que &#xE9;, aplica&#xE7;&#xE3;o e como aprender a linguagem JS		Quer aprender tudo sobre Javascript? Confira um gu
18	https://origamid.com/projetos/flexbox-guia-completo/	Guia completo de FlexBox - CSS - display: flex;	https://www.origamid.com/projetos/flexbox-guia-completo/guia-flexbox.png	Aprenda a utilizar o flexbox para a criação de lay
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tbelrlezayruhf
--

COPY "public"."users" ("id", "name", "email", "password", "pic_url") FROM stdin;
1	Clovis	email@domain.com	$2b$10$WgVki9.D4t32pzLlhWCImuEcsJkiMOecatID0.ZQtGBx8nqlX9Q/W	https://rollingstone.uol.com.br/media/uploads/deadpool.jpg
2	Paulo	paulo@driven.com.br	$2b$10$Za85Cr.113cIUpEXvw2Yz.mOFGxcVNBFzuYE.UQkOss6NtX3x778K	https://m.extra.globo.com/incoming/833637-ea8-aa6/w367h550-PROP/careca.jpg
3	claudia	claudia@driven.com	$2b$10$HlAQR8AxnOWzBc0T/mSP0OJvpppK5Mgx5k.Gw1Y7NpJk5g3tHRFv6	https://static1.tudosobremake.com.br/articles/9/21/15/9/@/232829-para-o-dia-da-mulher-os-6-produtos-de-m-article_media_new_3_1-4.jpg
4	Pato	pato@gmail.com	$2b$10$8TCOb1Je2UO1WS0Dt7Bvs.vXjbCNhs9hTDOCnezifyDo/YDZznc0W	https://st.depositphotos.com/1007514/2506/i/600/depositphotos_25067721-stock-photo-mallard-duck-with-clipping-path.jpg
5	gzin	g@g.com	$2b$10$UWmv7fBMPUa7vDI5hOCDQOC3Akawaro3MCquIgEUZTKM9nGHiBGFu	http://img4.wikia.nocookie.net/__cb20100624200028/zelda/images/9/9d/Link_Artwork_1_(Twilight_Princess).png
6	Fake	fake@gmail.com	$2b$10$DJLr5cZLS9mnKxoVyok7MObOCJemmctng/K4OnvRFK4OZ.skh1NkK	https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tbelrlezayruhf
--

SELECT pg_catalog.setval('"public"."comments_id_seq"', 1, false);


--
-- Name: post_likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tbelrlezayruhf
--

SELECT pg_catalog.setval('"public"."post_likes_id_seq"', 84, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tbelrlezayruhf
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 25, true);


--
-- Name: tag_mentions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tbelrlezayruhf
--

SELECT pg_catalog.setval('"public"."tag_mentions_id_seq"', 8, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tbelrlezayruhf
--

SELECT pg_catalog.setval('"public"."tags_id_seq"', 5, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tbelrlezayruhf
--

SELECT pg_catalog.setval('"public"."urls_id_seq"', 19, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tbelrlezayruhf
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 6, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("id");


--
-- Name: post_likes post_likes_pkey; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."post_likes"
    ADD CONSTRAINT "post_likes_pkey" PRIMARY KEY ("id");


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");


--
-- Name: tag_mentions tag_mentions_pkey; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."tag_mentions"
    ADD CONSTRAINT "tag_mentions_pkey" PRIMARY KEY ("id");


--
-- Name: tags tags_name_key; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_name_key" UNIQUE ("name");


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."urls"
    ADD CONSTRAINT "urls_pkey" PRIMARY KEY ("id");


--
-- Name: urls urls_url_key; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."urls"
    ADD CONSTRAINT "urls_url_key" UNIQUE ("url");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_email_key" UNIQUE ("email");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");


--
-- Name: comments comments_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: comments comments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."comments"
    ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;


--
-- Name: post_likes post_likes_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."post_likes"
    ADD CONSTRAINT "post_likes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id");


--
-- Name: post_likes post_likes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."post_likes"
    ADD CONSTRAINT "post_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id");


--
-- Name: posts posts_author_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id");


--
-- Name: posts posts_url_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_url_id_fkey" FOREIGN KEY ("url_id") REFERENCES "public"."urls"("id");


--
-- Name: tag_mentions tag_mentions_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."tag_mentions"
    ADD CONSTRAINT "tag_mentions_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id");


--
-- Name: tag_mentions tag_mentions_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tbelrlezayruhf
--

ALTER TABLE ONLY "public"."tag_mentions"
    ADD CONSTRAINT "tag_mentions_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id");


--
-- PostgreSQL database dump complete
--

