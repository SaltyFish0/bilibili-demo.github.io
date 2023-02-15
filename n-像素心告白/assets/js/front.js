const app = new Vue({
	// Creator-SaltyFish 
	// QQ3121713453 
	el: '#app',
	data: {
		name1: "若逢新雪初霁,满月当空,下面平铺着皓影,上面流转着亮银,而你带笑向我走来,月色和雪色之间 ,是第三种绝色,与我而言,月星辉之,你是第四种难得。",
		name2: "我试图用那些漂亮的句子来形容你。但是不行,我字字推敲写出长长一段话,你眉眼一弯熠熠生辉,就让我觉得不行,这些文字写不出你眼里的星辰,写不出你唇角的春风无论哪个词,都及不上你半分的惊艳。",
		name3: "我见过沧海的云,巫峡的雨。 我见过一月的雪覆于白山,又渐变于葱茏。 我在峨眉的林里云兴霞蔚,一径之后,雾水成露,沾于衣襟。我听过柔橹漂浮,声声入水,又归于沉寂。我看到春风八里十里,衣袖带花,无论何时忆起,它们实在是人生可喜,但都不如我此刻遇到的你。",
		name4: "对你的喜欢,大抵是燃烧的星星坠落在海底开成珊瑚,又或是揉碎的白云环绕着山峦流成大河。那种梦幻,不真切,却令人迷醉的心动,就像晚风拥抱月亮,海浪亲吻礁石。",
		name5: "世界上美好的东西不太多,立秋傍晚从河对岸吹来的风,和二十来岁笑起来要人命的你。",
		name6: "我们或者在月光下闲游,或者在灯光下谈心,手握着手,心对着心,就像一对五十岁的情人。",
		name7: "写信真是一件温柔的事,细腻的小心思就藏在横竖撇捺之中,像是一只害羞的小兽躲在情意绵绵的字里行间,被火漆封印起来,等着解封的那一刻窜出来,跳进启信人眼底的柔波里。",
		name8: "我一生都是坚定不移的唯物主义者,唯有你,我希望有来生。",
		name9: "跟你在一起的时光都很耀眼,因为天气好,因为天气不好,因为天气刚刚好,每一天,都很美好。",
		condition1: false,
		condition2: false,
		condition3: false,
		condition4: false,
		condition5: false,
		condition6: false,
		condition7: false,
		condition8: false,
		condition9: false,
		condition10:false,
		DefaultText1:"那天我想对你说",
		DefaultText2:"XianYv XianYv",
		DefaultText3:"wxhn !",
	},
	computed: {

	},
	methods: {
		r1click1() {
			this.condition1 = !this.condition1
			this.condition2 = false
			this.condition3 = false
			this.condition4 = false
			this.condition5 = false
			this.condition6 = false
			this.condition7 = false
			this.condition8 = false
			this.condition9 = false
		},
		r1click2() {
			this.condition2 = !this.condition2
			this.condition1 = false
			this.condition3 = false
			this.condition4 = false
			this.condition5 = false
			this.condition6 = false
			this.condition7 = false
			this.condition8 = false
			this.condition9 = false
		},
		r1click3() {
			this.condition3 = !this.condition3
			this.condition1 = false
			this.condition2 = false
			this.condition4 = false
			this.condition5 = false
			this.condition6 = false
			this.condition7 = false
			this.condition8 = false
			this.condition9 = false
		},
		r1click4() {
			this.condition4 = !this.condition4
			this.condition2 = false
			this.condition3 = false
			this.condition1 = false
			this.condition5 = false
			this.condition6 = false
			this.condition7 = false
			this.condition8 = false
			this.condition9 = false
		},
		r1click5() {
			this.condition5 = !this.condition5
			this.condition2 = false
			this.condition3 = false
			this.condition4 = false
			this.condition1 = false
			this.condition6 = false
			this.condition7 = false
			this.condition8 = false
			this.condition9 = false
		},
		r1click6() {
			this.condition6 = !this.condition6
			this.condition2 = false
			this.condition3 = false
			this.condition4 = false
			this.condition5 = false
			this.condition1 = false
			this.condition7 = false
			this.condition8 = false
			this.condition9 = false
		},
		r1click7() {
			this.condition7 = !this.condition7
			this.condition2 = false
			this.condition3 = false
			this.condition4 = false
			this.condition5 = false
			this.condition6 = false
			this.condition1 = false
			this.condition8 = false
			this.condition9 = false
		},
		r1click8() {
			this.condition8 = !this.condition8
			this.condition2 = false
			this.condition3 = false
			this.condition4 = false
			this.condition5 = false
			this.condition6 = false
			this.condition7 = false
			this.condition1 = false
			this.condition9 = false
		},
		r1click9() {
			this.condition9 = !this.condition9
			this.condition2 = false
			this.condition3 = false
			this.condition4 = false
			this.condition5 = false
			this.condition6 = false
			this.condition7 = false
			this.condition8 = false
			this.condition1 = false
		}
	}
})
