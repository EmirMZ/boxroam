PGDMP     ;    .                z            boxroam_database    13.6    14.2 �    \           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ]           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ^           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            _           1262    131428    boxroam_database    DATABASE     d   CREATE DATABASE boxroam_database WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
     DROP DATABASE boxroam_database;
             	   app_admin    false                        2615    131429    app    SCHEMA        CREATE SCHEMA app;
    DROP SCHEMA app;
             	   app_admin    false            `           0    0 
   SCHEMA app    ACL     '   GRANT USAGE ON SCHEMA app TO app_user;
                	   app_admin    false    5            a           0    0 4   FUNCTION pg_replication_origin_advance(text, pg_lsn)    ACL     `   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_advance(text, pg_lsn) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    215            b           0    0 +   FUNCTION pg_replication_origin_create(text)    ACL     W   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_create(text) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    216            c           0    0 )   FUNCTION pg_replication_origin_drop(text)    ACL     U   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_drop(text) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    217            d           0    0 (   FUNCTION pg_replication_origin_oid(text)    ACL     T   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_oid(text) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    218            e           0    0 6   FUNCTION pg_replication_origin_progress(text, boolean)    ACL     b   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_progress(text, boolean) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    219            f           0    0 1   FUNCTION pg_replication_origin_session_is_setup()    ACL     ]   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_is_setup() TO azure_pg_admin;
       
   pg_catalog          azuresu    false    220            g           0    0 8   FUNCTION pg_replication_origin_session_progress(boolean)    ACL     d   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_progress(boolean) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    221            h           0    0 .   FUNCTION pg_replication_origin_session_reset()    ACL     Z   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_reset() TO azure_pg_admin;
       
   pg_catalog          azuresu    false    222            i           0    0 2   FUNCTION pg_replication_origin_session_setup(text)    ACL     ^   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_setup(text) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    223            j           0    0 +   FUNCTION pg_replication_origin_xact_reset()    ACL     W   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_reset() TO azure_pg_admin;
       
   pg_catalog          azuresu    false    224            k           0    0 K   FUNCTION pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone)    ACL     w   GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    225            l           0    0    FUNCTION pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn)    ACL     �   GRANT ALL ON FUNCTION pg_catalog.pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    214            m           0    0    FUNCTION pg_stat_reset()    ACL     D   GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset() TO azure_pg_admin;
       
   pg_catalog          azuresu    false    226            n           0    0 #   FUNCTION pg_stat_reset_shared(text)    ACL     O   GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset_shared(text) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    227            o           0    0 4   FUNCTION pg_stat_reset_single_function_counters(oid)    ACL     `   GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset_single_function_counters(oid) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    229            p           0    0 1   FUNCTION pg_stat_reset_single_table_counters(oid)    ACL     ]   GRANT ALL ON FUNCTION pg_catalog.pg_stat_reset_single_table_counters(oid) TO azure_pg_admin;
       
   pg_catalog          azuresu    false    228            �            1259    131549    booking    TABLE     �   CREATE TABLE app.booking (
    destination integer NOT NULL,
    boarding_position integer NOT NULL,
    date date NOT NULL,
    id integer NOT NULL,
    passenger_id integer NOT NULL,
    transaction_id integer,
    bus_id integer NOT NULL
);
    DROP TABLE app.booking;
       app         heap 	   app_admin    false    5            q           0    0    TABLE booking    ACL     D   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE app.booking TO app_user;
          app       	   app_admin    false    213            �            1259    131547    booking_id_seq    SEQUENCE     �   CREATE SEQUENCE app.booking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE app.booking_id_seq;
       app       	   app_admin    false    213    5            r           0    0    booking_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE app.booking_id_seq OWNED BY app.booking.id;
          app       	   app_admin    false    212            s           0    0    SEQUENCE booking_id_seq    ACL     ?   GRANT SELECT,USAGE ON SEQUENCE app.booking_id_seq TO app_user;
          app       	   app_admin    false    212            �            1259    131538    bus    TABLE     �   CREATE TABLE app.bus (
    id integer NOT NULL,
    seats integer NOT NULL,
    depart_time time without time zone NOT NULL,
    station_arr_id integer[] NOT NULL,
    time_table integer[] NOT NULL,
    "position" integer NOT NULL
);
    DROP TABLE app.bus;
       app         heap 	   app_admin    false    5            t           0    0 	   TABLE bus    ACL     @   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE app.bus TO app_user;
          app       	   app_admin    false    211            �            1259    131536 
   bus_id_seq    SEQUENCE        CREATE SEQUENCE app.bus_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE app.bus_id_seq;
       app       	   app_admin    false    211    5            u           0    0 
   bus_id_seq    SEQUENCE OWNED BY     3   ALTER SEQUENCE app.bus_id_seq OWNED BY app.bus.id;
          app       	   app_admin    false    210            v           0    0    SEQUENCE bus_id_seq    ACL     ;   GRANT SELECT,USAGE ON SEQUENCE app.bus_id_seq TO app_user;
          app       	   app_admin    false    210            �            1259    131512    driver    TABLE     �   CREATE TABLE app.driver (
    shift integer,
    name character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    id integer NOT NULL,
    bus_id integer
);
    DROP TABLE app.driver;
       app         heap 	   app_admin    false    5            w           0    0    TABLE driver    ACL     C   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE app.driver TO app_user;
          app       	   app_admin    false    209            �            1259    131510    driver_id_seq    SEQUENCE     �   CREATE SEQUENCE app.driver_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE app.driver_id_seq;
       app       	   app_admin    false    209    5            x           0    0    driver_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE app.driver_id_seq OWNED BY app.driver.id;
          app       	   app_admin    false    208            y           0    0    SEQUENCE driver_id_seq    ACL     >   GRANT SELECT,USAGE ON SEQUENCE app.driver_id_seq TO app_user;
          app       	   app_admin    false    208            �            1259    131491    operator    TABLE     �   CREATE TABLE app.operator (
    shift integer,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    name character varying NOT NULL,
    id integer NOT NULL
);
    DROP TABLE app.operator;
       app         heap 	   app_admin    false    5            z           0    0    TABLE operator    ACL     E   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE app.operator TO app_user;
          app       	   app_admin    false    207            �            1259    131489    operator_id_seq    SEQUENCE     �   CREATE SEQUENCE app.operator_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE app.operator_id_seq;
       app       	   app_admin    false    207    5            {           0    0    operator_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE app.operator_id_seq OWNED BY app.operator.id;
          app       	   app_admin    false    206            |           0    0    SEQUENCE operator_id_seq    ACL     @   GRANT SELECT,USAGE ON SEQUENCE app.operator_id_seq TO app_user;
          app       	   app_admin    false    206            �            1259    131436 	   passenger    TABLE     .  CREATE TABLE app.passenger (
    name character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    gender integer NOT NULL,
    phone character varying(20) NOT NULL,
    address character varying(120) NOT NULL,
    id integer NOT NULL
);
    DROP TABLE app.passenger;
       app         heap 	   app_admin    false    5            }           0    0    TABLE passenger    ACL     F   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE app.passenger TO app_user;
          app       	   app_admin    false    201            �            1259    131434    passenger_id_seq    SEQUENCE     �   CREATE SEQUENCE app.passenger_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE app.passenger_id_seq;
       app       	   app_admin    false    201    5            ~           0    0    passenger_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE app.passenger_id_seq OWNED BY app.passenger.id;
          app       	   app_admin    false    200                       0    0    SEQUENCE passenger_id_seq    ACL     A   GRANT SELECT,USAGE ON SEQUENCE app.passenger_id_seq TO app_user;
          app       	   app_admin    false    200            �            1259    131468    station    TABLE     _   CREATE TABLE app.station (
    id integer NOT NULL,
    name character varying(20) NOT NULL
);
    DROP TABLE app.station;
       app         heap 	   app_admin    false    5            �           0    0    TABLE station    ACL     D   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE app.station TO app_user;
          app       	   app_admin    false    205            �            1259    131466    station_id_seq    SEQUENCE     �   CREATE SEQUENCE app.station_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE app.station_id_seq;
       app       	   app_admin    false    205    5            �           0    0    station_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE app.station_id_seq OWNED BY app.station.id;
          app       	   app_admin    false    204            �           0    0    SEQUENCE station_id_seq    ACL     ?   GRANT SELECT,USAGE ON SEQUENCE app.station_id_seq TO app_user;
          app       	   app_admin    false    204            �            1259    131449    transaction    TABLE     �   CREATE TABLE app.transaction (
    bank_transaction_number integer NOT NULL,
    price integer NOT NULL,
    date date NOT NULL,
    id integer NOT NULL
);
    DROP TABLE app.transaction;
       app         heap 	   app_admin    false    5            �           0    0    TABLE transaction    ACL     H   GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE app.transaction TO app_user;
          app       	   app_admin    false    203            �            1259    131447    transaction_id_seq    SEQUENCE     �   CREATE SEQUENCE app.transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE app.transaction_id_seq;
       app       	   app_admin    false    5    203            �           0    0    transaction_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE app.transaction_id_seq OWNED BY app.transaction.id;
          app       	   app_admin    false    202            �           0    0    SEQUENCE transaction_id_seq    ACL     C   GRANT SELECT,USAGE ON SEQUENCE app.transaction_id_seq TO app_user;
          app       	   app_admin    false    202            �           0    0    COLUMN pg_config.name    ACL     D   GRANT SELECT(name) ON TABLE pg_catalog.pg_config TO azure_pg_admin;
       
   pg_catalog          azuresu    false    94            �           0    0    COLUMN pg_config.setting    ACL     G   GRANT SELECT(setting) ON TABLE pg_catalog.pg_config TO azure_pg_admin;
       
   pg_catalog          azuresu    false    94            �           0    0 $   COLUMN pg_hba_file_rules.line_number    ACL     S   GRANT SELECT(line_number) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0    COLUMN pg_hba_file_rules.type    ACL     L   GRANT SELECT(type) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0 !   COLUMN pg_hba_file_rules.database    ACL     P   GRANT SELECT(database) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0 "   COLUMN pg_hba_file_rules.user_name    ACL     Q   GRANT SELECT(user_name) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0     COLUMN pg_hba_file_rules.address    ACL     O   GRANT SELECT(address) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0     COLUMN pg_hba_file_rules.netmask    ACL     O   GRANT SELECT(netmask) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0 $   COLUMN pg_hba_file_rules.auth_method    ACL     S   GRANT SELECT(auth_method) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0     COLUMN pg_hba_file_rules.options    ACL     O   GRANT SELECT(options) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0    COLUMN pg_hba_file_rules.error    ACL     M   GRANT SELECT(error) ON TABLE pg_catalog.pg_hba_file_rules TO azure_pg_admin;
       
   pg_catalog          azuresu    false    91            �           0    0 ,   COLUMN pg_replication_origin_status.local_id    ACL     [   GRANT SELECT(local_id) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;
       
   pg_catalog          azuresu    false    134            �           0    0 /   COLUMN pg_replication_origin_status.external_id    ACL     ^   GRANT SELECT(external_id) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;
       
   pg_catalog          azuresu    false    134            �           0    0 .   COLUMN pg_replication_origin_status.remote_lsn    ACL     ]   GRANT SELECT(remote_lsn) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;
       
   pg_catalog          azuresu    false    134            �           0    0 -   COLUMN pg_replication_origin_status.local_lsn    ACL     \   GRANT SELECT(local_lsn) ON TABLE pg_catalog.pg_replication_origin_status TO azure_pg_admin;
       
   pg_catalog          azuresu    false    134            �           0    0     COLUMN pg_shmem_allocations.name    ACL     O   GRANT SELECT(name) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;
       
   pg_catalog          azuresu    false    95            �           0    0    COLUMN pg_shmem_allocations.off    ACL     N   GRANT SELECT(off) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;
       
   pg_catalog          azuresu    false    95            �           0    0     COLUMN pg_shmem_allocations.size    ACL     O   GRANT SELECT(size) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;
       
   pg_catalog          azuresu    false    95            �           0    0 *   COLUMN pg_shmem_allocations.allocated_size    ACL     Y   GRANT SELECT(allocated_size) ON TABLE pg_catalog.pg_shmem_allocations TO azure_pg_admin;
       
   pg_catalog          azuresu    false    95            �           0    0    COLUMN pg_statistic.starelid    ACL     K   GRANT SELECT(starelid) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.staattnum    ACL     L   GRANT SELECT(staattnum) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stainherit    ACL     M   GRANT SELECT(stainherit) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stanullfrac    ACL     N   GRANT SELECT(stanullfrac) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stawidth    ACL     K   GRANT SELECT(stawidth) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stadistinct    ACL     N   GRANT SELECT(stadistinct) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stakind1    ACL     K   GRANT SELECT(stakind1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stakind2    ACL     K   GRANT SELECT(stakind2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stakind3    ACL     K   GRANT SELECT(stakind3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stakind4    ACL     K   GRANT SELECT(stakind4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stakind5    ACL     K   GRANT SELECT(stakind5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.staop1    ACL     I   GRANT SELECT(staop1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.staop2    ACL     I   GRANT SELECT(staop2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.staop3    ACL     I   GRANT SELECT(staop3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.staop4    ACL     I   GRANT SELECT(staop4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.staop5    ACL     I   GRANT SELECT(staop5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stacoll1    ACL     K   GRANT SELECT(stacoll1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stacoll2    ACL     K   GRANT SELECT(stacoll2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stacoll3    ACL     K   GRANT SELECT(stacoll3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stacoll4    ACL     K   GRANT SELECT(stacoll4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stacoll5    ACL     K   GRANT SELECT(stacoll5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stanumbers1    ACL     N   GRANT SELECT(stanumbers1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stanumbers2    ACL     N   GRANT SELECT(stanumbers2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stanumbers3    ACL     N   GRANT SELECT(stanumbers3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stanumbers4    ACL     N   GRANT SELECT(stanumbers4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stanumbers5    ACL     N   GRANT SELECT(stanumbers5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stavalues1    ACL     M   GRANT SELECT(stavalues1) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stavalues2    ACL     M   GRANT SELECT(stavalues2) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stavalues3    ACL     M   GRANT SELECT(stavalues3) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stavalues4    ACL     M   GRANT SELECT(stavalues4) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_statistic.stavalues5    ACL     M   GRANT SELECT(stavalues5) ON TABLE pg_catalog.pg_statistic TO azure_pg_admin;
       
   pg_catalog          azuresu    false    39            �           0    0    COLUMN pg_subscription.oid    ACL     I   GRANT SELECT(oid) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0    COLUMN pg_subscription.subdbid    ACL     M   GRANT SELECT(subdbid) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0    COLUMN pg_subscription.subname    ACL     M   GRANT SELECT(subname) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0    COLUMN pg_subscription.subowner    ACL     N   GRANT SELECT(subowner) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0 !   COLUMN pg_subscription.subenabled    ACL     P   GRANT SELECT(subenabled) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0 "   COLUMN pg_subscription.subconninfo    ACL     Q   GRANT SELECT(subconninfo) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0 "   COLUMN pg_subscription.subslotname    ACL     Q   GRANT SELECT(subslotname) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0 $   COLUMN pg_subscription.subsynccommit    ACL     S   GRANT SELECT(subsynccommit) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           0    0 &   COLUMN pg_subscription.subpublications    ACL     U   GRANT SELECT(subpublications) ON TABLE pg_catalog.pg_subscription TO azure_pg_admin;
       
   pg_catalog          azuresu    false    64            �           2604    131552 
   booking id    DEFAULT     b   ALTER TABLE ONLY app.booking ALTER COLUMN id SET DEFAULT nextval('app.booking_id_seq'::regclass);
 6   ALTER TABLE app.booking ALTER COLUMN id DROP DEFAULT;
       app       	   app_admin    false    213    212    213            �           2604    131541    bus id    DEFAULT     Z   ALTER TABLE ONLY app.bus ALTER COLUMN id SET DEFAULT nextval('app.bus_id_seq'::regclass);
 2   ALTER TABLE app.bus ALTER COLUMN id DROP DEFAULT;
       app       	   app_admin    false    210    211    211            �           2604    131515 	   driver id    DEFAULT     `   ALTER TABLE ONLY app.driver ALTER COLUMN id SET DEFAULT nextval('app.driver_id_seq'::regclass);
 5   ALTER TABLE app.driver ALTER COLUMN id DROP DEFAULT;
       app       	   app_admin    false    208    209    209            �           2604    131494    operator id    DEFAULT     d   ALTER TABLE ONLY app.operator ALTER COLUMN id SET DEFAULT nextval('app.operator_id_seq'::regclass);
 7   ALTER TABLE app.operator ALTER COLUMN id DROP DEFAULT;
       app       	   app_admin    false    206    207    207            �           2604    131439    passenger id    DEFAULT     f   ALTER TABLE ONLY app.passenger ALTER COLUMN id SET DEFAULT nextval('app.passenger_id_seq'::regclass);
 8   ALTER TABLE app.passenger ALTER COLUMN id DROP DEFAULT;
       app       	   app_admin    false    201    200    201            �           2604    131471 
   station id    DEFAULT     b   ALTER TABLE ONLY app.station ALTER COLUMN id SET DEFAULT nextval('app.station_id_seq'::regclass);
 6   ALTER TABLE app.station ALTER COLUMN id DROP DEFAULT;
       app       	   app_admin    false    205    204    205            �           2604    131452    transaction id    DEFAULT     j   ALTER TABLE ONLY app.transaction ALTER COLUMN id SET DEFAULT nextval('app.transaction_id_seq'::regclass);
 :   ALTER TABLE app.transaction ALTER COLUMN id DROP DEFAULT;
       app       	   app_admin    false    203    202    203            Y          0    131549    booking 
   TABLE DATA           n   COPY app.booking (destination, boarding_position, date, id, passenger_id, transaction_id, bus_id) FROM stdin;
    app       	   app_admin    false    213   m�       W          0    131538    bus 
   TABLE DATA           Z   COPY app.bus (id, seats, depart_time, station_arr_id, time_table, "position") FROM stdin;
    app       	   app_admin    false    211   ܓ       U          0    131512    driver 
   TABLE DATA           G   COPY app.driver (shift, name, email, password, id, bus_id) FROM stdin;
    app       	   app_admin    false    209   j�       S          0    131491    operator 
   TABLE DATA           A   COPY app.operator (shift, email, password, name, id) FROM stdin;
    app       	   app_admin    false    207   �       M          0    131436 	   passenger 
   TABLE DATA           S   COPY app.passenger (name, email, password, gender, phone, address, id) FROM stdin;
    app       	   app_admin    false    201   ��       Q          0    131468    station 
   TABLE DATA           (   COPY app.station (id, name) FROM stdin;
    app       	   app_admin    false    205   F�       O          0    131449    transaction 
   TABLE DATA           L   COPY app.transaction (bank_transaction_number, price, date, id) FROM stdin;
    app       	   app_admin    false    203   ��       �           0    0    booking_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('app.booking_id_seq', 10, true);
          app       	   app_admin    false    212            �           0    0 
   bus_id_seq    SEQUENCE SET     6   SELECT pg_catalog.setval('app.bus_id_seq', 45, true);
          app       	   app_admin    false    210            �           0    0    driver_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('app.driver_id_seq', 1, true);
          app       	   app_admin    false    208            �           0    0    operator_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('app.operator_id_seq', 2, true);
          app       	   app_admin    false    206            �           0    0    passenger_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('app.passenger_id_seq', 15, true);
          app       	   app_admin    false    200            �           0    0    station_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('app.station_id_seq', 12, true);
          app       	   app_admin    false    204            �           0    0    transaction_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('app.transaction_id_seq', 10, true);
          app       	   app_admin    false    202            �           2606    131554    booking booking_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY app.booking
    ADD CONSTRAINT booking_pkey PRIMARY KEY (id);
 ;   ALTER TABLE ONLY app.booking DROP CONSTRAINT booking_pkey;
       app         	   app_admin    false    213            �           2606    131546    bus bus_pkey 
   CONSTRAINT     G   ALTER TABLE ONLY app.bus
    ADD CONSTRAINT bus_pkey PRIMARY KEY (id);
 3   ALTER TABLE ONLY app.bus DROP CONSTRAINT bus_pkey;
       app         	   app_admin    false    211            �           2606    131522    driver driver_email_key 
   CONSTRAINT     P   ALTER TABLE ONLY app.driver
    ADD CONSTRAINT driver_email_key UNIQUE (email);
 >   ALTER TABLE ONLY app.driver DROP CONSTRAINT driver_email_key;
       app         	   app_admin    false    209            �           2606    131520    driver driver_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY app.driver
    ADD CONSTRAINT driver_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY app.driver DROP CONSTRAINT driver_pkey;
       app         	   app_admin    false    209            �           2606    131501    operator operator_email_key 
   CONSTRAINT     T   ALTER TABLE ONLY app.operator
    ADD CONSTRAINT operator_email_key UNIQUE (email);
 B   ALTER TABLE ONLY app.operator DROP CONSTRAINT operator_email_key;
       app         	   app_admin    false    207            �           2606    131499    operator operator_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY app.operator
    ADD CONSTRAINT operator_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY app.operator DROP CONSTRAINT operator_pkey;
       app         	   app_admin    false    207            �           2606    131446    passenger passenger_email_key 
   CONSTRAINT     V   ALTER TABLE ONLY app.passenger
    ADD CONSTRAINT passenger_email_key UNIQUE (email);
 D   ALTER TABLE ONLY app.passenger DROP CONSTRAINT passenger_email_key;
       app         	   app_admin    false    201            �           2606    131444    passenger passenger_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY app.passenger
    ADD CONSTRAINT passenger_pkey PRIMARY KEY (id);
 ?   ALTER TABLE ONLY app.passenger DROP CONSTRAINT passenger_pkey;
       app         	   app_admin    false    201            �           2606    131475    station station_name_key 
   CONSTRAINT     P   ALTER TABLE ONLY app.station
    ADD CONSTRAINT station_name_key UNIQUE (name);
 ?   ALTER TABLE ONLY app.station DROP CONSTRAINT station_name_key;
       app         	   app_admin    false    205            �           2606    131473    station station_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY app.station
    ADD CONSTRAINT station_pkey PRIMARY KEY (id);
 ;   ALTER TABLE ONLY app.station DROP CONSTRAINT station_pkey;
       app         	   app_admin    false    205            �           2606    131454    transaction transaction_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY app.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY (id);
 C   ALTER TABLE ONLY app.transaction DROP CONSTRAINT transaction_pkey;
       app         	   app_admin    false    203            �           826    131432     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     h   ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app GRANT SELECT,USAGE ON SEQUENCES  TO app_user;
          app       	   app_admin    false    5            �           826    131433     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     _   ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app GRANT ALL ON FUNCTIONS  TO app_user;
          app       	   app_admin    false    5            �           826    131431    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     t   ALTER DEFAULT PRIVILEGES FOR ROLE app_admin IN SCHEMA app GRANT SELECT,INSERT,DELETE,UPDATE ON TABLES  TO app_user;
          app       	   app_admin    false    5            �           826    131430     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     R   ALTER DEFAULT PRIVILEGES FOR ROLE app_admin REVOKE ALL ON FUNCTIONS  FROM PUBLIC;
                	   app_admin    false            Y   _   x�e��� г�U�Kt���Ђ���'[A���ao4C�Pn8&9�NaT\�u���gy�C��*qJ<�Ŀ����ʽeS#��ڭ��"��(z      W   ~   x�m�[
�0D�oy-"h$Ǐ�%;)�{'J��Pd�7���3y�u*p<����.(�R�K�7�6BO�	!�b�+�t�f��	����b�W��.Bat�;S5�_bꪓ�5�k����ؖR��53      U   g   x����,I-.q42��,��7�t q���s9U�UT��3��}<<��]=�*���
���+=�*s�
|MS
"�,�˂L�C�,+�R=�99c��b���� q�      S   �   x�e�;�0  й=�s���M�D�� :��@��bbpz��� ���f�G��#Pt�`M�*�˾���f�:~���:�P�5+��PxF�\�zNl�5q��.�`h�R0���׀̅�鼶}��MD7u��;rʟ�V�N&z@�,~�բw�/��jl@�w!� ��6�      M   �  x�}�˒�:�q|��!\3�(���4r�3��"B����=8uʮ3Y�쫕���\ h��?i�*�+��w�~�]e�r��K�6J��S�%Oa�x���K� �7��ΓU�` ��A�!ǈd�_��Eyo�
|���b�B��{�?sL����M�ƿEB/lFs)��)�!��V�-M����bؙE�]����Y^�PSf���e9x�9?	9�.�ʈ�q�M���=�Ɣ~�����ɜZBdEV�!�Q_c�)N1x�W����������l�IG��pF�%�\�|�܆!`Tm���~Շ#`fJ�#A��$�\�k
�ET�x�W�q�e:*�	E�:�d@(��z/q\��UCn&I�(�֮�r�(�}O�X�@��e@r .:L�tu�<�����~x�p�e�^IYѡR�4�b��^)LS��Tv7t]W��>QO��;%%v�ii����^ҿ�/X�Y��nj2J�9ҲuD9�de[j��'��SP⾳�j¦U	���6�@������ƮM�Z�=�Ruq�]X�ט΍����'�q��氪�'�;���j@0hkܒ��-O;F���܆\�0,d�0�Y�Yi~zȲ������)���!~�yI���$�I`�0�v�$)(KrI^1^������Ǖ�+��|�;�^�o�v��xYi#��W�qZ{R��?	��#I$N>+�LA�*o�W�8\{u���3��W��*���>ëȈz#�r�K(ˍc{Fm^db9�|���	~0;�iI�L9�_�е��ԥ���q�v�r�0�q��{Ǳ�4o��IO&���UV� `�"B����o���-����[T�[x	�T���/A7��;���&
a+��B�Ye��n4�����H�X9���	;��~s���j�X�f��X      Q   T   x�ʻ
�0�9�c��Vg��.%C;h��:�S�y��(A5]hi���E����Li����̴��� �h9Mn�V � ���      O   Q   x�]���0krz"'�%��[�a�����ܹ��]4�Έ^"���5��MG��8������BC�2�ˤ4(~�;��     