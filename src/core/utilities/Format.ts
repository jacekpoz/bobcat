/*
	Bobcat bot for Revolt
	crispycat <the@crispy.cat>
	https://crispy.cat/software/bobcat
	https://github.com/crispy-cat/bobcat
	Licensed under the GNU GPL v3 license
*/

import moment from "moment";
import Config from "../app/Config";

export default class Format {
	public static datetime(date?: Date) {
		if (typeof date === null || typeof date === undefined)
			date = new Date();

		return moment(date).format(global.bobcat.config.get("bobcat.formats.datetime") ?? "YYYY-MM-DD HH:mm:ss");
	}
}
