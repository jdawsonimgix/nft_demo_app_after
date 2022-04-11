import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const ExampleFiles = [
  {
    title: 'Ghost 1',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/ZoQuQrJPeXEFFCJUSLgo9rfXZ-pTHbrWxgl7Eis2ftABEMuvRFyBESj7P12EW7Gv4Ex8s0wtHRk8OWgyyQzd36YfJlyKyu7XNniLQA=s0',
  },
  {
    title: 'Ghost 2',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/i5UnCRrWJN0oH1PVILKfJU56GzwDD3XEuQxbrIyNwHToeM9ByvsEFtLPuTZn6bYY97CAC-4EN3d0oXrGcctQuOjgRkXnwPbex73H=s0',
  },
  {
    title: 'Ghost 3',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/nxw8rQf1PI9sOp-xbrOYyNx-VvLaO14qKEFECn_Pw_5xGoikmrwXOBT_xIN1tGc5XlLZFiqMOV2g8fgZH8-5QrmVu5TZZbQjR9uNaXc=s0',
  },
  {
    title: 'Ghost 4',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/EFambSLtdQr3tS-pYTCEJcbRe_jmhYo-xF3Dds3VGSmT2oyXUabgglNCSIbokrlF7nZReptiBPQYRLXjgbQV2xxObGlWfAMtdK2Q=s0',
  },
  {
    title: 'Ghost 5',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/V3Wcb0X53b6qe76EUijFtRcl6n_VMeEbjQmLJWRK2FHIBD6GdsT4RZ-e1TZz6QQnVVbCk1keW2taRidfSJywVr340iOsEDiE0aNKzg=s0',
  },
  {
    title: 'Ghost 6',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/yM7xdQ0TKCyT4Fclkoaw6aKTg43WJlevcN5TjtiRrwE747_2Zp6cQvfbOPxoB9I7eoW5mXhtccxOu0x2-Kt_fxK57vQnPOzwdKPT0Q=s0',
  },
  {
    title: 'Ghost 7',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/P3WovKtlgZMX4PZmJsgD-w62HFFL7zdjyav4pVlzfIfIv-1mw2QcVacDhw7INQd-TqJWA2I8P2kVxW7KOp-9CWJaoDMHOvGKb32Vaw=s0',
  },
  {
    title: 'Ghost 8',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/YsMta58hDYMbNpKjmAyb4g77VioJnxNb3-vBrH14tRoaHh2pboaESOG3VIcYvKhx070BU9KpABBZ6TW8m4ywPCWXd_tXVd8U0yGYpw=s0',
  },
  {
    title: 'Ghost 9',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/ivSpX6Q4tZ8j5NPthTxF9RxnNHzN-KYz8DA4FWiL5gOso5aTBTobfG6lyYz0bugbJQ1hp3ePBoqc-KXWAaxM2NsK9DGJB7wopX6PVg=s0',
  },
  {
    title: 'Ghost 10',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/rJ-Gq3xK5Tj2XB8WmsBHcbA8tezwcqxQw3wDNYJ5WDjJCtRkn8eUjiVfHEheOdCFqkwL_XDYilExcrixLALB5ckRih6xH4DQTaiC=s0',
  },
  {
    title: 'Ghost 11',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/wMLnpy4Q0vThdTvrQ1F7hk7E7tHVPPX8fqDz1QBvF_0Q30SqEhQOfiXkFJ2W2HPy0u-SwxZhR7ZeVeJJVC2_vrXxPZYWa0LeekPB=s0',
  },
  {
    title: 'Ghost 12',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/sO3u22BHKHJ16sR059dEx61w8Mv0X6mmAXImlkwnw20SGd7_5gBxECGI5VkzL4njRqPs0XkW20QZbUG5mW3M_hldb8_XdwO3Hj6gJg=s0',
  },
  {
    title: 'Ghost 13',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/3f4osmDzh0T1GyZr53uc_vpBeuFhTeQSqP5oI7LySSNW-6qAln2HprMkfJC7yvjK9-kNW-X193-HyBIXsTHQjJGCZ7Ft4i8dGSmkhtc=s0',
  },
  {
    title: 'Ghost 14',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/xwPuPqZjAH_iAr1Fj7JNgmDfOfRgblLBBiHweR2UV8-jn3qr9w_mnglqDxnHJeXiX9zC1Pxjl4bmleCSHDUKWJiNl-0ouxjR7haXLwE=s0',
  },
  {
    title: 'Ghost 15',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/qJ7n-YWY642lZ961vu-ZpRPR1fCRJzG2Ue2u97izEULFnN0NbaOFYDe_Y4bioh97aL3vUazbA3Tc2oTJCe2C4Qw0br1slaguIdWoRw=s0',
  },
  {
    title: 'Ghost 16',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/iG9U1P7K1C0iQAlpiYmJLgLEO0AxubM2KALh-_Hz3IACq6axn8XA-A-OpIp1BXcqA1dF9cZihtBM9NirvdxcaFME9jdnfaMJp2PxLA=s0',
  },
  {
    title: 'Ghost 17',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/YY4dNJLgIRoRJf4Ds_0PWW4xmCMu48uwmxgYhjLpFY4TgwTbY0hEEDyr54SNdDKV50mcjUJqGWTy727xSOKDSzti74Q6HkjMSmOX=s0',
  },
  {
    title: 'Ghost 18',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/vDagEcI6HNCciGxYBRR-3cu_FeFDer2wHYG4mz38aWyU8VUUB3baOYIQN4Gzx-q_pfPxJjZCfRRTgkp9QPdm74Wg7CYRDJ9_2V_F-g=s0',
  },
  {
    title: 'Ghost 19',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/7HzXMr4GlLP7V2rMaY0KvUeTHGEpqya8u3OLkKEAurg019Cw7jZqHW89FRigLUkwsI3c0r6RSo0BsuMKrIlwiPMEbDos-pKjg8N7pg=s0',
  },
  {
    title: 'Ghost 20',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/SZw9FsjG0bhEZhzJno6LqsI3VYdKSCAUchwYR-of9SxuQzCbInm1LS4V4w7LP94Cga4WY4fBfSU_6cdwYxkI6VjEqjjHEP9GE8NUsto=s0',
  },
  {
    title: 'Ghost 21',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/G1Pb2LX6lObtuwif3BYGVJfxGaqfe0gNMu-1cKNgdr71UHZfMUUEYYaURJjVkshfyH4dN2ypHm3l4_CLbxKLFyDh3vivmBDvYesXoQ=s0',
  },
  {
    title: 'Ghost 22',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/vMHePqL8RSpTwSTOErpGxH29yfWmBUipXwHp6mbhbqlI1kmwfsD2x_b1jR2sn4-cl5neIN541R8NPky-Y7kz4Am9ka0z-XyFJeSQyg=s0',
  },
  {
    title: 'Ghost 23',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/YiXDBQ9lYzZf19QPnqrC8Tuos3_w1NstEcmy6d-_1J2DhGDz8Pf3pvaBca914vwsZaMuR3Qr55PvMPr--Ouu8KFF8Yb1OMvOuGRI=s0',
  },
  {
    title: 'Ghost 24',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/sVHZdHQdIqx6O18uep8q3W6l92vCk-IU9WMy9ZhVAXp7zAe9awsbBVDz70vChbB616U9jb7k3qj3MwigUd06xN7sgUwXzgaIip3QJg=s0',
  },
  {
    title: 'Ghost 25',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/IM790W0g5foJAD4W8DE2nnkJgH4AmU_G6HdGVrxueG88SiBLYvYrq0H9Iu3ECI5F55NzmZa1pBS5WFBwrcZ9TNLntpWqJaCZ1uWxmEg=s0',
  },
  {
    title: 'Ghost 26',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/q6yuJu_whlxxTQR2HARLANgSziwN_qZzrMe8Wd4F2UGFLVyp2T9zppzJjqoQRGc-kSMbB7t6GNR0CAGZF1PancF8ueitirgy4pRYO4I=s0',
  },
  {
    title: 'Ghost 27',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/55GOPccbuyWZCBeRliAjAXILQtuAuWFrQjh0f3cDpO2Kr_5m-D1LjxdWlPUrHbvojX96GNcjOlGdhMnL3NQuwz4_2PCUYy2pjjU5=s0',
  },
  {
    title: 'Ghost 28',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/PquoPqXvwmDzNVS_JT4S2Ian6AUc-M7C2okI-msZ9XN5xvRb_t2jqdfuB6FWiUWjY_u9nyXZlE5zPEz-B0cmNQq3Y7Zx9gZpgRLniw=s0',
  },
  {
    title: 'Ghost 29',
    size: '3.9 MB',
    source:
      'https://lh3.googleusercontent.com/TzjsW-Ukahu8TE7lorbHQT-vIKcOAZ7iwN_M5A4X6M_xFtP8YOOCQzZ9BZcRpPdtrYpPKMs-weZLCpl1ZTsJxWLSjzRYZ-g0hbljcg=s0',
  },
  {
    title: 'Ghost 30',
    size: '3.9 MB',
    source:
      'https://jdawson.imgix.net/ghost-30.jpeghttps://lh3.googleusercontent.com/R1caRSB9n7JamCfmDYL2hprFOWRCyspenWgqKya9oT6urdX-UsLCg_bWY_JpceygkZCC7RMEJuoYZzNhvT_3WkGi470oP7Smm4thJtE=s0',
  },
];

// THIS SHOWS THE PAGE BEFORE IMGIX!!!!
const Before = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Imgix NFT demo app - Before optimization"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-2xl font-bold">
        JPEG images images from OpenSea user Gh0stly Gh0sts.
      </h1>

      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {ExampleFiles.map((file) => (
          <li key={file.source} className="relative">
            <div className="group  block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img
                src={file.source}
                alt={file.title}
                className="pointer-events-none object-cover group-hover:opacity-75"
              />
              {/* <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">View details for {file.title}</span>
              </button> */}
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              {file.title}
            </p>
            {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">
              {file.size}
            </p> */}
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default Before;
