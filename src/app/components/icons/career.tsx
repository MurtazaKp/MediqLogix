import React, { type FC } from "react";
import type { SquaredIconProps } from "./types";

export const CareerIcon: FC<SquaredIconProps> = ({
  size = 24,
  className = "",
  color = "#ffffff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="140"
    height="112"
    viewBox="0 0 140 112"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_1422"
          data-name="Rectangle 1422"
          width="134.381"
          height="101.711"
          fill="none"
          stroke="#fff"
          strokeWidth="0.5"
        />
      </clipPath>
      <clipPath id="clip-CV">
        <rect width="140" height="112" />
      </clipPath>
    </defs>
    <g id="CV" clipPath="url(#clip-CV)">
      <g id="Group_2712" data-name="Group 2712" transform="translate(3 5)">
        <g id="Group_2711" data-name="Group 2711" clipPath="url(#clip-path)">
          <path
            id="Path_2583"
            data-name="Path 2583"
            d="M105.307,126.509c0-.006,0-.011,0-.017s-.016.01-.024.017h.022"
            transform="translate(-86.419 -103.826)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2584"
            data-name="Path 2584"
            d="M133.812,163.767c-3.293-4.61-6.567-9.233-9.87-13.835a2.5,2.5,0,0,1-.5-1.557q.02-29.515.01-59.029c0-.507.006-1.016-.013-1.523a7.586,7.586,0,0,0-7.208-7.184h0c-2.2.011-4.4.026-6.6.031-1.253,0-1.254,0-1.246,1.236,0,.238.016.475.025.712h0l.19-.02h0a40.3,40.3,0,0,1,5.2-.1,6.459,6.459,0,0,1,2.273.107,5.685,5.685,0,0,1,5.363,5.847q.02,29.648.022,59.3c0,.7-.227.819-.866.819q-53.383-.023-106.765,0c-.719,0-.885-.2-.884-.893q.026-29.558.016-59.117A5.7,5.7,0,0,1,18.3,82.608h0a12.852,12.852,0,0,1,3.008-.112c1.339-.034,2.683-.067,4.019.006.795.044.838-.317.86-.94.025-.694-.171-.924-.895-.912-2.381.037-4.762,0-7.143-.01h0a4.93,4.93,0,0,0-1.24.13,7.647,7.647,0,0,0-5.968,7.692q-.011,29.918.008,59.835a2.758,2.758,0,0,1-.554,1.719q-4.963,6.9-9.881,13.829a2.485,2.485,0,0,0,1.611,3.986,8.032,8.032,0,0,0,1.427.066q63.775,0,127.55,0c.269,0,.538.009.806-.011a2.465,2.465,0,0,0,2.214-1.428,2.515,2.515,0,0,0-.312-2.692m-54.264,2.084c-4.09-.029-8.18-.014-12.27-.015-4.06,0-8.12-.018-12.18.015-.771.006-.934-.177-.633-.889.323-.763.346-1.815.892-2.278.6-.508,1.661-.153,2.518-.154,6.836-.013,13.673,0,20.509-.021.618,0,.993.113,1.131.787a9.082,9.082,0,0,0,.582,1.775c.275.631.135.784-.551.78m52.729-.312c-.219.447-.675.293-1.043.294q-23.423.008-46.846.005c-1.9,0-1.9,0-2.506-1.826-.243-.734-.5-1.462-.717-2.2a1.7,1.7,0,0,0-1.845-1.346c-1.821.012-3.643,0-5.464,0H55.583c-1.537,0-1.762.162-2.256,1.6-.328.956-.718,1.9-.962,2.875-.191.766-.591.912-1.315.911q-15.227-.034-30.455-.015-8.733,0-17.467-.005c-.368,0-.832.152-1.031-.311-.173-.4.208-.65.406-.928,3.161-4.447,6.338-8.884,9.483-13.342a1.48,1.48,0,0,1,1.384-.706q26.917.028,53.833.015,26.872,0,53.743-.018a1.637,1.637,0,0,1,1.518.8c3.123,4.437,6.277,8.853,9.413,13.282.192.272.6.5.4.918"
            transform="translate(0 -66.19)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2585"
            data-name="Path 2585"
            d="M108.875,14.394c.6-.01.686.376.7.812.016.518.056,1.078-.6,1.26.3.069.4.266.376.709a21.644,21.644,0,0,0,0,2.594c.041.652-.133.872-.825.853-1.938-.052-3.879-.025-5.818-.016a1.964,1.964,0,0,0-1.05.111h0c2.26.009,4.52.049,6.779.009.72-.013.9.209.9.9,0,.72-.171.974-.94.949-1.842-.061-3.687-.025-5.531-.015-.277,0-.578-.094-.832.1,0,.006,0,.011,0,.017,2.08.006,4.162.054,6.241,0,.833-.023,1.091.151,1.086,1.047-.04,8.5-.023,17-.023,25.506q0,13.379,0,26.759c0,.387-.019.775-.029,1.162a2.366,2.366,0,0,0,.547,1.986h0c.6.01,1.192.029,1.787.029q39.2,0,78.4,0c.268,0,.535-.022.8-.033.817-.451.669-1.247.7-1.977-.018-.327-.051-.654-.051-.981q0-26.23-.017-52.459c0-.78.146-1.07,1-1.043,2.057.065,4.117.012,6.175.007h0a13.185,13.185,0,0,0-3.087-.121c-1.069-.037-2.144-.055-3.211,0-.692.039-.877-.2-.844-.857.029-.576-.021-1.007.812-.989,2.229.05,4.459,0,6.688,0h0a21.694,21.694,0,0,0-3.723-.11c-1.07-.03-2.141-.017-3.212,0-.387.006-.607-.059-.59-.526.043-1.194.047-2.39.066-3.586a.418.418,0,0,1-.12-.117,1.616,1.616,0,0,1-.168-.779c-.035-1.024.129-1.21,1.135-1.2,2.325.026,4.65-.07,6.974.05h0a1.856,1.856,0,0,0-.964-.093c-2.03-.009-4.061-.035-6.09.012-.677.016-.848-.177-.842-.845.034-3.463.017-6.927.016-10.39,0-2.088-1.038-3.128-3.14-3.131Q182.983,0,177.609,0,145.1,0,112.582,0c-2.245,0-3.241.994-3.241,3.206q0,4.658,0,9.315c0,1.828,0,1.806-1.791,1.835-2.083.034-4.168-.126-6.249.091,2.524-.118,5.049-.013,7.574-.057m79.8,62.826q-19.164-.038-38.329-.018-19.075,0-38.15.021c-.812,0-.959-.221-.958-.985q.033-32.106,0-64.212c0-.8.187-1.033,1.015-1.032q38.24.035,76.479,0c.732,0,.867.226.866.9q-.025,32.2,0,64.391c0,.74-.175.932-.926.931M111.237,7.967c.071-1.579.018-3.164.022-4.746,0-1.166.127-1.291,1.283-1.291q11.509,0,23.017,0H188.22c1.255,0,1.364.109,1.365,1.393,0,1.582-.049,3.167.021,4.746.035.786-.239.909-.949.907q-13.882-.035-27.764-.016H150.416q-19.077,0-38.153.018c-.8,0-1.064-.176-1.026-1.009"
            transform="translate(-83.149 0)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2586"
            data-name="Path 2586"
            d="M108.433,80.383c.724-.011.919.219.895.912-.022.623-.065.984-.86.94-1.336-.074-2.679-.041-4.018-.006a12.853,12.853,0,0,0-3.008.112h0c2.386.01,4.773.04,7.159.016a1.6,1.6,0,0,1,.368.03c.652-.182.612-.742.6-1.26-.013-.435-.1-.822-.7-.812-2.524.044-5.05-.062-7.574.057h0c2.38.009,4.762.047,7.143.01"
            transform="translate(-83.14 -65.923)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2587"
            data-name="Path 2587"
            d="M604.488,80.307c-1.006-.011-1.17.175-1.135,1.2a1.617,1.617,0,0,0,.169.779.418.418,0,0,0,.12.117c0-.022,0-.044,0-.065h0c-.009-.237-.024-.475-.025-.712-.008-1.24-.006-1.233,1.246-1.236,2.2-.005,4.4-.02,6.6-.031h0c-2.324-.12-4.65-.025-6.974-.05"
            transform="translate(-495.234 -65.907)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2588"
            data-name="Path 2588"
            d="M604.983,91.752a.391.391,0,0,0,.049.024c-.016-.03-.03-.06-.048-.09h0c0,.022,0,.044,0,.065"
            transform="translate(-496.576 -75.258)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2589"
            data-name="Path 2589"
            d="M613.522,90.913a6.463,6.463,0,0,0-2.273-.107,40.3,40.3,0,0,0-5.2.1h0c2.491-.063,4.982-.078,7.473.008"
            transform="translate(-497.45 -74.495)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2590"
            data-name="Path 2590"
            d="M606.053,91.338l7.473.008c-2.491-.086-4.982-.071-7.473-.008"
            transform="translate(-497.454 -74.929)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2591"
            data-name="Path 2591"
            d="M95.656,117.5c1.368-.054,2.738-.018,4.108-.024.387,0,.774.007,1.161-.006.434-.015.87-.039.854-.645-.015-.559-.435-.569-.827-.575-1.429-.02-2.859.02-4.287-.018A4.21,4.21,0,0,1,94.4,116l-.007,0c-1.7.92-1.89,2.457-1.886,4.2q.047,24.983.019,49.966c0,.448-.015.9.019,1.343a2.454,2.454,0,0,0,2.706,2.571c2,.03,4,.008,6,.007a3.5,3.5,0,0,1,1.013.108,2.267,2.267,0,0,1-.432-1.639,2.2,2.2,0,0,1-1,.134c-1.64.009-3.28.014-4.92,0-1.535-.014-1.808-.288-1.809-1.852q-.01-14.85,0-29.7,0-10.645,0-21.29a6.675,6.675,0,0,1,.049-1.25c.067-.357.159-.72.647-.7.008-.007.016-.011.024-.017.038-.516.535-.363.834-.375"
            transform="translate(-75.931 -95.21)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2592"
            data-name="Path 2592"
            d="M103.072,115.681a4.21,4.21,0,0,0,2.264.238c1.428.038,2.858,0,4.287.018.393.005.812.016.827.575.016.606-.421.631-.854.645-.387.013-.774,0-1.161.006-1.369.005-2.74-.031-4.108.024-.3.012-.8-.141-.834.375.254-.2.555-.1.832-.1,1.844-.01,3.689-.046,5.531.015.769.026.943-.228.94-.949,0-.693-.183-.915-.9-.9-2.259.04-4.519,0-6.779-.01-.084.079.043.021-.043.068"
            transform="translate(-84.602 -94.896)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2593"
            data-name="Path 2593"
            d="M144.981,432.4a1.737,1.737,0,0,1,.374.159,2.367,2.367,0,0,1-.547-1.986.959.959,0,0,1-.259.189,2.266,2.266,0,0,0,.432,1.639"
            transform="translate(-118.647 -353.414)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2594"
            data-name="Path 2594"
            d="M91.267,118.666q0,26.2,0,52.4a4.62,4.62,0,0,0,.073.887,2.5,2.5,0,0,0,2.488,2.138c2.529.014,5.059-.009,7.588-.018a1.432,1.432,0,0,1-.172-.16,3.505,3.505,0,0,0-1.014-.108c-2,0-4,.022-6-.007a2.454,2.454,0,0,1-2.706-2.572c-.034-.447-.019-.9-.019-1.343q0-24.983-.019-49.966c0-1.74.183-3.277,1.886-4.2l.007,0,0,0c.005-.021.012-.04.018-.059-1.486.346-2.128,1.246-2.129,3.012"
            transform="translate(-74.912 -94.93)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2595"
            data-name="Path 2595"
            d="M103.07,115.62c-.006.02-.013.038-.018.059l0,0c.086-.047-.041.01.043-.069h0l-.028.007"
            transform="translate(-84.586 -94.896)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2596"
            data-name="Path 2596"
            d="M147.131,440.927h.2a1.754,1.754,0,0,0-.374-.159,1.446,1.446,0,0,0,.172.16"
            transform="translate(-120.625 -361.786)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2597"
            data-name="Path 2597"
            d="M103.009,181.057c-1.383,0-1.383,0-1.383-1.4q0-25.251,0-50.5c0-.567,0-1.134,0-1.7,0-.372.025-.725.45-.875-.488-.019-.579.345-.647.7a6.688,6.688,0,0,0-.049,1.249q0,10.645,0,21.29,0,14.849,0,29.7c0,1.564.273,1.839,1.809,1.852,1.64.015,3.28.009,4.92,0a2.2,2.2,0,0,0,1-.134q0-.094,0-.189l-6.1,0"
            transform="translate(-83.205 -103.901)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2598"
            data-name="Path 2598"
            d="M144.55,430.568c0,.063,0,.126,0,.189a.959.959,0,0,0,.259-.189h-.258"
            transform="translate(-118.647 -353.414)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2599"
            data-name="Path 2599"
            d="M610.5,174.056c1.9-.018,2.78-.879,2.866-2.781.015-.328.009-.656.009-.984q0-25.151,0-50.3c0-.447.005-.895-.028-1.342a2.721,2.721,0,0,0-1.352-2.288,1.38,1.38,0,0,1-.5-.394,1.543,1.543,0,0,1-1.132.248c-1.608.014-3.216,0-4.824.007a4.281,4.281,0,0,0-.8.048.59.59,0,0,0,.021,1.142,7.808,7.808,0,0,0,1.248.043c1.4.007,2.8-.027,4.2.022.324.011.808-.123.9.4.49-.026.583.336.651.694a6.627,6.627,0,0,1,.05,1.249q0,25.315,0,50.631c0,2.071-.152,2.219-2.252,2.221-1.431,0-2.862.006-4.294,0a2.259,2.259,0,0,1-1-.133,2.143,2.143,0,0,1-.469,1.64,5.021,5.021,0,0,1,1.17-.114c1.85.011,3.7.017,5.549,0"
            transform="translate(-495.586 -95.186)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2600"
            data-name="Path 2600"
            d="M610.985,117.188c-1.4-.049-2.8-.015-4.2-.022a7.809,7.809,0,0,1-1.248-.043.59.59,0,0,1-.021-1.142,4.269,4.269,0,0,1,.8-.048c1.608,0,3.216.007,4.824-.007a1.543,1.543,0,0,0,1.132-.248.7.7,0,0,1-.037-.063c-2.229.008-4.46.054-6.688,0-.833-.018-.783.413-.812.989-.032.655.152.9.844.857,1.067-.06,2.141-.042,3.211,0a13.185,13.185,0,0,1,3.087.121h0c-.087-.519-.571-.384-.895-.4"
            transform="translate(-496.372 -94.899)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2601"
            data-name="Path 2601"
            d="M601.981,430.789a.976.976,0,0,1-.259-.183c-.035.73.113,1.525-.7,1.977h0a3.4,3.4,0,0,1,.495-.153,2.142,2.142,0,0,0,.469-1.641"
            transform="translate(-493.321 -353.446)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2602"
            data-name="Path 2602"
            d="M609.471,174.181c2.291.113,3.286-1.37,3.282-3.254q-.063-25.969-.024-51.939c0-.3.018-.6-.008-.9a2.525,2.525,0,0,0-2.072-2.366l0,.005c-.014.015-.029.024-.044.037a1.38,1.38,0,0,0,.5.395,2.721,2.721,0,0,1,1.353,2.288c.034.447.028.894.028,1.342q0,25.151,0,50.3c0,.328.006.657-.009.984-.085,1.9-.962,2.763-2.865,2.781-1.85.017-3.7.011-5.549,0a5.03,5.03,0,0,0-1.17.114,1.389,1.389,0,0,1-.193.153c2.257,0,4.517-.057,6.769.054"
            transform="translate(-494.704 -94.99)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2603"
            data-name="Path 2603"
            d="M646.69,115.641l0-.005-.078-.02h0a.624.624,0,0,0,.037.063c.014-.013.03-.023.044-.037"
            transform="translate(-530.743 -94.899)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2604"
            data-name="Path 2604"
            d="M601.512,440.785a3.4,3.4,0,0,0-.494.153h.3a1.4,1.4,0,0,0,.193-.153"
            transform="translate(-493.321 -361.801)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2605"
            data-name="Path 2605"
            d="M607.4,181.38c1.431.01,2.862.005,4.294,0,2.1,0,2.251-.151,2.252-2.221q0-25.315,0-50.631a6.632,6.632,0,0,0-.05-1.249c-.068-.358-.161-.72-.651-.694h0c.544.179.45.64.45,1.046q0,26.195.012,52.389c0,.768-.242,1.063-1.032,1.05-2.092-.036-4.185-.013-6.278-.01q0,.092,0,.184a2.257,2.257,0,0,0,1,.133"
            transform="translate(-497.732 -103.903)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2606"
            data-name="Path 2606"
            d="M605.207,430.6h-.259a.976.976,0,0,0,.259.184c0-.061,0-.123,0-.184"
            transform="translate(-496.548 -353.442)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2607"
            data-name="Path 2607"
            d="M644.611,126.594h0"
            transform="translate(-529.102 -103.909)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2608"
            data-name="Path 2608"
            d="M179.352,505.063a3.535,3.535,0,0,0-.883-.087q-52.883,0-105.767,0c-1.27,0-1.733.285-1.73,1.045s.455,1.021,1.741,1.021h52.749q26.419,0,52.839,0a4.81,4.81,0,0,0,.98-.044.993.993,0,0,0,.071-1.931"
            transform="translate(-58.254 -414.487)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2609"
            data-name="Path 2609"
            d="M81.977,485.146a5.316,5.316,0,0,0,.716.01l102.015,0c1.3,0,1.824-.317,1.8-1.076-.023-.727-.492-.989-1.781-.989H82.8c-.269,0-.538-.011-.806.009-.617.047-1.015.347-1.021,1.006s.407.956,1,1.037"
            transform="translate(-66.463 -396.524)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2610"
            data-name="Path 2610"
            d="M353.769,158.548c0-.786-.158-1.044-1-1.049-.829,0-.948.255-.945,1,.029,6.685.017,13.37.017,20.055,0,6.715.011,13.43-.016,20.144,0,.7.1.988.9.966.76-.021,1.057-.129,1.055-1.007q-.05-20.055-.007-40.109"
            transform="translate(-288.779 -129.277)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2611"
            data-name="Path 2611"
            d="M418.7,171.694c-4.507.041-9.014.02-13.521.021s-9.015.016-13.521-.017c-.682-.005-.893.178-.827.846.057.574-.156,1.112.851,1.107q13.521-.068,27.043,0c.909,0,.8-.464.828-1.046.033-.65-.1-.913-.853-.906"
            transform="translate(-320.79 -140.928)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2612"
            data-name="Path 2612"
            d="M418.733,298.4c-4.506.039-9.012.02-13.518.02s-9.012.025-13.518-.023c-.8-.009-.85.325-.818.931.028.525-.139.992.763.987q13.563-.061,27.125,0c.9,0,.791-.436.827-1.016.042-.675-.125-.9-.862-.9"
            transform="translate(-320.833 -244.928)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2613"
            data-name="Path 2613"
            d="M421.865,87.442q-13.166.058-26.332,0c-.749,0-.87.249-.857.906.012.631,0,1.005.859.995,4.358-.053,8.717-.024,13.076-.024,4.418,0,8.837-.021,13.255.02.744.007.875-.237.856-.9-.018-.626.012-1-.857-1"
            transform="translate(-323.953 -71.773)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2614"
            data-name="Path 2614"
            d="M191.329,173.621q11.315-.063,22.631,0c.864,0,.8-.415.79-.978-.009-.534.128-1-.767-.981-3.786.061-7.573.026-11.36.026-3.757,0-7.514.014-11.271-.013-.652,0-.973.095-.906.85.055.613-.072,1.1.883,1.1"
            transform="translate(-156.312 -140.901)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2615"
            data-name="Path 2615"
            d="M214.078,298.4c-3.79.052-7.581.023-11.372.023-3.821,0-7.642.028-11.462-.022-.868-.011-.7.478-.7.962s-.147.955.709.951q11.417-.055,22.834,0c.924.005.711-.507.737-1.005.028-.535.065-.923-.744-.912"
            transform="translate(-156.39 -244.929)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2616"
            data-name="Path 2616"
            d="M411.661,332.656c0-.6,0-.964-.817-.949-3.159.057-6.321.023-9.481.023-3.22,0-6.441.031-9.66-.023-.78-.013-.876.288-.836.918.035.554-.133,1.057.808,1.05q9.571-.07,19.142,0c.881.006.845-.4.844-1.016"
            transform="translate(-320.821 -272.268)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2617"
            data-name="Path 2617"
            d="M431.61,236.871c3.162-.057,6.325-.023,9.488-.024,3.193,0,6.386-.044,9.577.026.954.021.764-.507.806-1.051.05-.642-.067-.93-.846-.926q-9.533.057-19.066,0c-.888-.006-.815.413-.845,1.016-.035.688.073.975.885.961"
            transform="translate(-353.538 -192.804)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2618"
            data-name="Path 2618"
            d="M431.524,268.626c3.187-.065,6.377-.024,9.565-.024v0c3.189,0,6.378-.036,9.565.024.887.017.836-.413.849-1.023.013-.627-.056-.927-.841-.922q-9.566.058-19.132,0c-.748,0-.834.277-.78.871.047.522-.212,1.1.773,1.079"
            transform="translate(-353.554 -218.891)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2619"
            data-name="Path 2619"
            d="M410.784,395c-3.189.06-6.38.023-9.57.023s-6.381.042-9.57-.024c-1.013-.021-.756.575-.823,1.127-.082.681.166.83.828.827q9.571-.04,19.141.005c.793,0,.839-.319.826-.93-.012-.6.065-1.046-.832-1.029"
            transform="translate(-320.777 -324.217)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2620"
            data-name="Path 2620"
            d="M431.521,205.329c3.161-.056,6.325-.023,9.487-.023,3.222,0,6.445-.02,9.667.017.672.008.914-.162.833-.838-.063-.524.184-1.079-.783-1.072q-9.621.066-19.244,0c-.936-.006-.68.538-.719,1.023-.045.56-.022.906.76.893"
            transform="translate(-353.561 -166.964)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2621"
            data-name="Path 2621"
            d="M391.671,365.449c3.19-.065,6.382-.026,9.573-.026,3.221,0,6.443-.036,9.663.024.859.016.776-.408.785-.97.01-.6-.009-.938-.816-.933q-9.618.061-19.237,0c-.82-.005-.736.4-.734.919,0,.537-.129,1,.765.986"
            transform="translate(-320.855 -298.4)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2622"
            data-name="Path 2622"
            d="M254.122,89.13c.181.57.546.555.961.518s.914.213,1.156-.488c1.1-3.176,2.244-6.335,3.4-9.491.175-.479.016-.559-.4-.6-.787-.078-1.288.063-1.565.975-.721,2.379-1.58,4.717-2.423,7.184-.786-2.471-1.586-4.778-2.233-7.128a1.2,1.2,0,0,0-1.5-1.03c-.5.036-.631.163-.471.644,1.04,3.135,2.082,6.269,3.082,9.416"
            transform="translate(-206.004 -64.885)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2623"
            data-name="Path 2623"
            d="M204.607,89.342a6.45,6.45,0,0,0,2.044-.306c.419-.133.574-.333.463-.781-.137-.552-.252-.833-.984-.609-2.22.679-4.209-.026-4.9-1.727a4.449,4.449,0,0,1,.5-4.729c1.17-1.442,2.79-1.451,4.418-1.005.556.152.78.13.928-.459.143-.568.082-.873-.558-1.024a8.289,8.289,0,0,0-2.3-.2c-3.192.143-5.224,2.413-5.151,5.734.069,3.169,2.144,5.133,5.549,5.105"
            transform="translate(-163.387 -64.428)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2624"
            data-name="Path 2624"
            d="M438.746,116.77c-2.357.046-4.714.018-7.072.018-2.328,0-4.656.032-6.982-.019-.714-.016-.884.227-.807.866.062.512-.224,1.1.761,1.094q7.071-.071,14.144,0c1.053.009.611-.679.694-1.139.1-.578-.062-.829-.738-.816"
            transform="translate(-347.914 -95.844)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2625"
            data-name="Path 2625"
            d="M190.752,331.877c1.7-.052,3.4-.017,5.1-.016,1.729,0,3.459-.012,5.188.01.446.006.674-.09.609-.583a2.855,2.855,0,0,1,0-.714c.063-.509-.135-.657-.647-.653-3.429.022-6.859.042-10.287-.005-1.046-.014-.621.679-.7,1.146-.1.582.07.837.742.816"
            transform="translate(-155.94 -270.797)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2626"
            data-name="Path 2626"
            d="M261.543,235.5c-.026-.382-.138-.512-.523-.511-3.517.011-7.035.007-10.552.007-1,0-.459.757-.555,1.178s-.061.788.6.769c1.7-.047,3.4-.016,5.1-.016h4.65c1.4,0,1.38,0,1.284-1.427"
            transform="translate(-205.081 -192.88)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2627"
            data-name="Path 2627"
            d="M250.593,268.619q5.192-.038,10.384,0c1.007.008.536-.7.612-1.124.084-.467.061-.833-.65-.807-1.7.061-3.4.02-5.1.02-1.731,0-3.462.034-5.192-.018-.676-.02-.76.3-.672.8.077.432-.38,1.138.619,1.131"
            transform="translate(-205.149 -218.898)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2628"
            data-name="Path 2628"
            d="M201.528,362.418c.1-.429.062-.775-.6-.755-1.73.053-3.463.018-5.194.019s-3.464.032-5.194-.015c-.642-.018-.719.3-.616.754.1.42-.444,1.169.57,1.166q5.239-.015,10.479,0c1.009,0,.461-.75.556-1.166"
            transform="translate(-155.841 -296.856)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2629"
            data-name="Path 2629"
            d="M250.631,205.358c1.727-.051,3.456-.015,5.184-.015h4.648c1.224,0,1.206,0,1.192-1.25,0-.428-.063-.633-.573-.63-3.486.022-6.972.031-10.458,0-.85-.009-.6.539-.6.954s-.24.972.608.947"
            transform="translate(-205.194 -167)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2630"
            data-name="Path 2630"
            d="M196.326,234.931c-1.515.054-3.033.016-4.55.015-1.3,0-1.267,0-1.283,1.279-.008.591.215.687.728.663.831-.039,1.665-.01,2.5-.011.862,0,1.729-.055,2.586.016.768.064.74-.381.681-.873-.054-.449.32-1.124-.66-1.088"
            transform="translate(-156.358 -192.833)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2631"
            data-name="Path 2631"
            d="M191,268.621c.894-.021,1.788-.007,2.683-.007v0c.865,0,1.731-.035,2.593.009,1,.051.564-.679.632-1.111.073-.464.071-.848-.645-.82-1.518.06-3.04.019-4.56.018-1.363,0-1.343,0-1.278,1.35.02.427.155.575.576.565"
            transform="translate(-156.284 -218.899)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2632"
            data-name="Path 2632"
            d="M196.393,203.473c-1.545.042-3.092.011-4.638.011-1.293,0-1.268,0-1.249,1.29.007.477.154.608.613.591.861-.033,1.724-.01,2.586-.009.892,0,1.787-.048,2.675.015.76.054.652-.435.606-.852s.344-1.07-.594-1.044"
            transform="translate(-156.366 -167.012)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2633"
            data-name="Path 2633"
            d="M205.612,22.361a2.268,2.268,0,0,0,2.266-2.271,2.295,2.295,0,1,0-4.589.058,2.261,2.261,0,0,0,2.324,2.212m-.022-3.154a.841.841,0,0,1,.9.855c-.03.587-.334.941-.873.953a.856.856,0,0,1-.939-.942.824.824,0,0,1,.912-.866"
            transform="translate(-166.86 -14.628)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2634"
            data-name="Path 2634"
            d="M239.148,22.347a2.191,2.191,0,0,0,2.275-2.221,2.264,2.264,0,0,0-4.527-.117,2.208,2.208,0,0,0,2.252,2.339m-.069-3.149a.855.855,0,0,1,1,.88.949.949,0,0,1-.821.953c-.616-.039-.978-.35-1.017-.875a.84.84,0,0,1,.834-.958"
            transform="translate(-194.446 -14.619)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <path
            id="Path_2635"
            data-name="Path 2635"
            d="M171.223,22.354a2.2,2.2,0,0,0,2.253-2.251,2.266,2.266,0,1,0-2.253,2.251m.027-3.161c.558.026.835.381.907.939-.1.5-.376.882-.931.877a.859.859,0,0,1-.919-.967.836.836,0,0,1,.943-.849"
            transform="translate(-138.67 -14.622)"
            fill="#fff"
            stroke="#fff"
            strokeWidth="0.5"
          />
        </g>
      </g>
    </g>
  </svg>
);
