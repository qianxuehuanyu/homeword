/**
 * Created by Administrator on 2016/10/29 0029.
 */
(function () {
 var Chinese="Brave Heart(动漫《数码宝贝》进化插曲)歌手：宮崎歩0:00&"+"不论是谁 都有想去逃避的时候0:30&"+"只要在那一刻发挥出潜能 便可以清除前路上的障碍0:37&"+" 一定有些什么事情是你才做到的 使这个蓝色星球0:44&"+"可以继续闪耀着光芒0:52&"+"抓紧着 你所拥有的梦想0:59&"+"守护着 你重要的朋友1:03&"+"使自己变得更坚强1:07&"+"潜在的未知力量 像火焰那般被点燃1:13&"+"像火焰那般被点燃1:17&"+"是真的 你的所有愿望1:20&"+"都一定可以实现...1:24&"+"把你勇敢的心展示给我1:27&"+"... 1:34&"+"天气不会天天都是晴天1:49&"+" 所以当寒冷的雨降下时 便张开雨伞1:55&"+" 生活是没有地图可以指引的 所以我们拥有自由2:02&"+" 随心所欲 即管前往任何地方2:10&"+"冲刺!! 以比风还要快的速度2:16&"+"去吧!! 比天空还要远的地方2:22&"+"碰见了一个全新的自己2:25&"+"潜在着未知的勇气2:31&"+"像一股气息那般囤积著2:35&"+"从胸中涌出的不安2:39&"+"一定会停止...2:42&"+"把你勇敢的心展示给我2:46&"+"抓紧着 眩目的明日3:05&"+"守护着 所爱的人3:09&"+"使自己变得坚强3:12&"+"放下那 软弱的你3:18&"+"打破那 封闭着的墙壁3:22&"+"将心中灼热的鼓动 变成为武器3:26&"+"相信你的心！3:31";

    var Japanese="Brave Heart(动漫《数码宝贝》进化插曲)歌手：宮崎歩0:00&"+ "逃げたりあきらめるコトは 谁も 0:30&"+ "一瞬あればできるから 歩き続けよう0:37&"+ " 君にしかできないコトがある 青い星に 0:44&"+ " 光がなくせぬように0:52&"+
 " つかめ! 描いた梦を0:59&"+ " まもれ! 大事な友を1:03&"+ " たくましい自分になれるさ1:07&"+ " 知らないパワーが宿る1:13&"+ " ハートに火がついたら1:17&"+
 " どんな愿いも 嘘じゃない1:20&"+ " きっとかなうから…1:24&"+ " show me your brave heart1:27&"+ " ... 1:34&"+ " 晴れの日ばかりじゃないから たまに 1:49&"+
 " 冷たい雨も振るけれど 伞ひろげよう1:55&"+ " 生き方に地図なんかないけど だから自由2:02&"+ " どこへだって行ける,君も2:10&"+ " はしれ! 风より速く2:16&"+
 " めざせ! 空より远く2:22&"+ " 新しい自分に逢えるさ2:25&"+ " 知らない勇気が眠る2:31&"+ " ハートに気がついたら2:35&"+ " 胸の中のどしゃ降りも2:39&"+ " きっと止むから…2:42&"+ " show me your brave heart2:46&"+ " つかめ! 眩しい明日を3:05&"+
 " まもれ! 爱する人を3:09&"+ " たくましい自分になれるさ3:12&"+ " こわせ! 弱気な君を3:18&"+ " くずせ! ぶつかる壁を3:22&"+ "热い鼓动 武器になるから3:26&"+ "believe in your heart3:31";
 //console.log(Japanese);

    var chinese_list,japanese_list;
    chinese_list=textchange(Chinese);
    japanese_list=textchange(Japanese);
    //console.log(chinese_list);
    //console.log(japanese_list);
    inplay("chinese",chinese_list);
    inplay("japanese",japanese_list);



})();