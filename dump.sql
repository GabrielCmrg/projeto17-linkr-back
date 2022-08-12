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
-- Name: tag_mentions; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."tag_mentions" (
    "id" integer NOT NULL,
    "post_id" integer,
    "tag_id" integer
);


ALTER TABLE public.tag_mentions OWNER TO qbeaofxarsjuqj;

--
-- Name: tag_mentions_id_seq; Type: SEQUENCE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE SEQUENCE "public"."tag_mentions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tag_mentions_id_seq OWNER TO qbeaofxarsjuqj;

--
-- Name: tag_mentions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER SEQUENCE "public"."tag_mentions_id_seq" OWNED BY "public"."tag_mentions"."id";


--
-- Name: tags; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."tags" (
    "id" integer NOT NULL,
    "name" "text" NOT NULL
);


ALTER TABLE public.tags OWNER TO qbeaofxarsjuqj;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE SEQUENCE "public"."tags_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO qbeaofxarsjuqj;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER SEQUENCE "public"."tags_id_seq" OWNED BY "public"."tags"."id";


--
-- Name: urls; Type: TABLE; Schema: public; Owner: qbeaofxarsjuqj
--

CREATE TABLE "public"."urls" (
    "id" integer NOT NULL,
    "url" "text" NOT NULL,
    "title" "text",
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
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."posts" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."posts_id_seq"'::"regclass");


--
-- Name: tag_mentions id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."tag_mentions" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."tag_mentions_id_seq"'::"regclass");


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."tags" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."tags_id_seq"'::"regclass");


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
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."posts" ("id", "url_id", "content", "author_id") FROM stdin;
\.


--
-- Data for Name: tag_mentions; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."tag_mentions" ("id", "post_id", "tag_id") FROM stdin;
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."tags" ("id", "name") FROM stdin;
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."urls" ("id", "url", "title", "image", "description") FROM stdin;
2	https://rollingstone.uol.com.br/media/uploads/deadpool.jpg	\N		
3	https://dev.to/guiselair/utilizando-variaveis-de-ambiente-com-create-react-app-5ckc	Utilizando variáveis de ambiente no ReactJS	https://dev.to/social_previews/article/541624.png	Fala clã! Tudo tranquilo? Depois de um tempo sem d
4	https://josiaspereira.com.br/como-enviar-authorization-no-header-com-axios/	Como enviar authorization no header com Axios	https://josiaspereira.com.br/content/images/2022/01/authorizatio-com-axios.png	Axios é um cliente HTTP baseado em promessa. Para 
5	https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/	O que &#xE9; Commit e Commits Sem&#xE2;nticos: saiba tudo!		Descubra o que é Commit e mergulhe neste conteúdo 
6	https://brasilescola.uol.com.br/o-que-e/portugues/o-que-e-artigo.htm	O que é artigo? - Brasil Escola	https://s1.static.brasilescola.uol.com.br/be/conteudo/images/artigos-suas-classificacoes-5644ddf92b6ce.jpg	Entenda o que é artigo, seu emprego e suas classif
7	https://trello.com/c/5GuJjox7/10-como-usu%C3%A1rio-logado-quero-ver-os-posts-da-minha-timeline-na-rota-timeline	\N		
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: qbeaofxarsjuqj
--

COPY "public"."users" ("id", "name", "email", "password", "pic_url") FROM stdin;
1	Clovis	email@domain.com	$2b$10$WgVki9.D4t32pzLlhWCImuEcsJkiMOecatID0.ZQtGBx8nqlX9Q/W	https://rollingstone.uol.com.br/media/uploads/deadpool.jpg
2	Paulo	paulo@driven.com.br	$2b$10$Za85Cr.113cIUpEXvw2Yz.mOFGxcVNBFzuYE.UQkOss6NtX3x778K	https://m.extra.globo.com/incoming/833637-ea8-aa6/w367h550-PROP/careca.jpg
\.


--
-- Name: post_likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."post_likes_id_seq"', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 7, true);


--
-- Name: tag_mentions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."tag_mentions_id_seq"', 1, false);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."tags_id_seq"', 1, false);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."urls_id_seq"', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qbeaofxarsjuqj
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 2, true);


--
-- Name: post_likes post_likes_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."post_likes"
    ADD CONSTRAINT "post_likes_pkey" PRIMARY KEY ("id");


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");


--
-- Name: tag_mentions tag_mentions_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."tag_mentions"
    ADD CONSTRAINT "tag_mentions_pkey" PRIMARY KEY ("id");


--
-- Name: tags tags_name_key; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_name_key" UNIQUE ("name");


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."tags"
    ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");


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
-- Name: tag_mentions tag_mentions_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."tag_mentions"
    ADD CONSTRAINT "tag_mentions_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id");


--
-- Name: tag_mentions tag_mentions_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qbeaofxarsjuqj
--

ALTER TABLE ONLY "public"."tag_mentions"
    ADD CONSTRAINT "tag_mentions_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id");


--
-- PostgreSQL database dump complete
--

