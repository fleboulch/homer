import type { View } from '@slack/web-api';
import { HOMER_GITLAB_URL, MOES_TAVERN_CHANNEL_ID } from '@/constants';
import type { SlackUser } from '@/core/typings/SlackUser';

export async function buildAppHomeView(user: SlackUser): Promise<View> {
  const firstName = user.real_name.split(' ')[0];

  return {
    type: 'home',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `\
Hello *${firstName}*, I'm *Homer*, the :logo-manomano: ManoMano's :gitlab: Gitlab master!

If you want to take a :beer: with me, don't hesitate to join <#${MOES_TAVERN_CHANNEL_ID}>.

If you want to better know me, here are some useful links:

:gitlab: <${HOMER_GITLAB_URL}|Gitlab project>
:books: <${HOMER_GITLAB_URL}/-/blob/master/README.md|Documentation>
:bug: <${HOMER_GITLAB_URL}/-/issues|Issues>
`,
        },
      },
    ],
  };
}
