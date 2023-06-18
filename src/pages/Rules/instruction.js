import styled from "styled-components";
import "./styleinstruction.css";

const InstructionScreen = () => {
  const MainWrapper = styled.div`
    width: 100%;
    position: relative;
    padding-top: 144px;
    display: flex;
    justify-content: center;
  `;
  const Content = styled.div`
    width: 1016px;
  `;
  const Part = styled.div`
    width: 100%;
    margin-bottom: 120px;
  `;
  const Stepsblock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  `;
  const StepsRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;
  const Step = styled.div`
    width: 504px;
    display: flex;
    flex-direction: column;
  `;
  const Image = styled.div`
    width: 100%;
    height: 309px;
    background-size: cover;
  `;
  const WorkersBlock = styled.div`
    width: 100%;
    margin-bottom: 32px;
  `;
  const Description = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    padding: 0 12px;
    margin-bottom: 16px;
    box-sizing: border-box;
  `;
  const Caption = styled.p`
    font-size: var(--text-cap-size);
    line-height: var(--text-cap-lineheight);
    color: var(--main-green);
    margin: 0;
  `;
  const Worker = styled.div`
    width: 100%;
    display: flex;
    gap: 8px;
    background-color: var(--main-white);
    border-radius: 16px;
    align-items: center;
    padding: 16px;
    height: 56px;
    box-sizing: border-box;
  `;
  const Workers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  const Rulesh2 = styled.h2`
    margin: 0;
    margin-bottom: 16px;
    padding-left: 12px;
    width: 760px;
  `;
  const Rulesp = styled.p`
    margin: 0;
    margin-bottom: 24px;
    padding-left: 12px;
    width: 760px;
  `;
  return (
    <MainWrapper>
      <Content>
        <Part>
          <h1
            style={{ marginTop: 0, marginBottom: "32px", paddingLeft: "12px" }}
          >
            Твоя инструкция
          </h1>
          <Stepsblock>
            <StepsRow>
              <Step>
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "16px",
                    paddingLeft: "12px",
                  }}
                >
                  Стэп 1
                </h2>
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "24px",
                    paddingLeft: "12px",
                  }}
                >
                  Получи задание от шефа и перейди на соответствующую
                  <br />
                  страницу в верхнем меню
                </p>
                <Image className="image1"></Image>
              </Step>
              <Step>
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "16px",
                    paddingLeft: "12px",
                  }}
                >
                  Стэп 2
                </h2>
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "24px",
                    paddingLeft: "12px",
                  }}
                >
                  Если необходимо, отсортируй жалобы с помощью кнопки в верхнем
                  блоке и открой жалобу из списка «к рассмотрению»
                </p>
                <Image className="image2"></Image>
              </Step>
            </StepsRow>
            <StepsRow>
              <Step>
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "16px",
                    paddingLeft: "12px",
                  }}
                >
                  Стэп 3
                </h2>
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "24px",
                    paddingLeft: "12px",
                  }}
                >
                  Пойми, нарушает ли контент Правила сообщества по указанной
                  причине и прими решение. Ты можешь открыть страницу контента,
                  если кникнешь на блок с его миниатюрой — там можно рассмотреть
                  штучкис/коллекцию/юзера подробнее
                </p>
                <Image className="image3"></Image>
              </Step>
              <Step>
                <h2
                  style={{
                    marginTop: 0,
                    marginBottom: "16px",
                    paddingLeft: "12px",
                  }}
                >
                  Стэп 4
                </h2>
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: "24px",
                    paddingLeft: "12px",
                  }}
                >
                  Если появилось уведомление о блокировке — все получилось!
                  Повторяй эту операцию весь рабочий день ха. Ты можешь
                  вернуться к списку жалоб через навигацию сверху или кнопку
                  «назад» в окне браузера
                </p>
                <Image className="image4"></Image>
              </Step>
            </StepsRow>
          </Stepsblock>
        </Part>
        <Part>
          <h1
            style={{ marginTop: 0, marginBottom: "32px", paddingLeft: "12px" }}
          >
            Твоя команда
          </h1>
          <WorkersBlock>
            <h2
              style={{
                marginTop: 0,
                marginBottom: "24px",
                paddingLeft: "12px",
              }}
            >
              Администрация
            </h2>
            <Description>
              <Caption style={{ width: "236px" }}>Должность</Caption>
              <Caption style={{ width: "376px" }}>Имя</Caption>
              <Caption style={{ width: "248px" }}>Почта</Caption>
              <Caption style={{ width: "104px" }}>Телеграм</Caption>
            </Description>
            <Workers>
              <Worker>
                <p style={{ width: "232px" }}>Главный админ</p>
                <h2 style={{ width: "376px" }}>
                  Мулкаманова Карина Азаматовна
                </h2>
                <p style={{ width: "248px" }}>karinamulk@gmail.com</p>
                <p style={{ width: "104px" }}>@karinamulk</p>
              </Worker>
              <Worker>
                <p style={{ width: "232px" }}>Админ</p>
                <h2 style={{ width: "376px" }}>Журанкова Мария Евгеньевна</h2>
                <p style={{ width: "248px" }}>zhurankovam@gmail.com</p>
                <p style={{ width: "104px" }}>@qeugens</p>
              </Worker>
              <Worker>
                <p style={{ width: "232px" }}>Админ</p>
                <h2 style={{ width: "376px" }}>Матлахов Данил Павлович</h2>
                <p style={{ width: "248px" }}>matlahovdanil@gmail.com</p>
                <p style={{ width: "104px" }}>@hb3936</p>
              </Worker>
            </Workers>
          </WorkersBlock>
          <WorkersBlock>
            <h2
              style={{
                marginTop: 0,
                marginBottom: "24px",
                paddingLeft: "12px",
              }}
            >
              Техподдержка
            </h2>
            <Description>
              <Caption style={{ width: "236px" }}>Должность</Caption>
              <Caption style={{ width: "376px" }}>Имя</Caption>
              <Caption style={{ width: "248px" }}>Почта</Caption>
              <Caption style={{ width: "104px" }}>Телеграм</Caption>
            </Description>
            <Workers>
              <Worker>
                <p style={{ width: "232px" }}>Главный техспециалист</p>
                <h2 style={{ width: "376px" }}>Журанкова Мария Евгеньевна</h2>
                <p style={{ width: "248px" }}>zhurankovam@gmail.com</p>
                <p style={{ width: "104px" }}>@qeugens</p>
              </Worker>
              <Worker>
                <p style={{ width: "232px" }}>Техспециалист</p>
                <h2 style={{ width: "376px" }}>
                  Мулкаманова Карина Азаматовна
                </h2>
                <p style={{ width: "248px" }}>karinamulk@gmail.com</p>
                <p style={{ width: "104px" }}>@karinamulk</p>
              </Worker>
            </Workers>
          </WorkersBlock>
        </Part>
        <Part style={{marginBottom: 0}}>
          <h1
            style={{ marginTop: 0, marginBottom: "32px", paddingLeft: "12px" }}
          >
            Памятка из Правил сообщества
          </h1>
          <Rulesh2 style={{ marginBottom: "24px" }}>
            Тебе следует принимать жалобы на контент, который:
          </Rulesh2>
          <Rulesh2>является спамом</Rulesh2>
          <Rulesp>
            Блокируется контент, созданный с помощью сторонних сервисов
            и фальшивых аккаунтов, опубликованный в рамках массированных атак,
            продвигающийся за счет недобросовестных тактик.
          </Rulesp>
          <Rulesh2>нарушает авторское право</Rulesh2>
          <Rulesp>
          Если владелец изображения заявил о нарушении его авторских прав и предоставил доказательства, то нарушающий правила контент нужно заблокировать.
          </Rulesp>
          <Rulesh2>является контентом для взрослых</Rulesh2>
          <Rulesp>
          Изображения обнаженных людей в контексте сексуальных действий, полового акта, гениталий, фетишизма, секс-игрушек, описания сексуального характера подлежат блокировке. Но материалы о сексуальном здоровье, грудном вскармливании, мастектомии и т. д. — нет.
          </Rulesp>
          <Rulesh2>распространяет ложную информация</Rulesh2>
          <Rulesp>
          Блокируются ложные утверждения медицинского характера, ложная информация об отдельных людях, группах людей, гражданском участии и событиях, теории заговора, подделанные фотоматериалы (которые подрывают доверие или причиняют вред) и контент, направленный на совершение актов мошенничества.
          </Rulesp>
          <Rulesh2>дискриминирует или оскорбляет</Rulesh2>
          <Rulesp>
          Блокируется контент, содержащий критику людей с переходом на личности, пристыживание и высмеивание, домогательства, правдоподобные угрозы или враждебные высказывания, нецензурную лексика. Также призывы к насилию или нападкам на людей на основании их расы, этнического или национального происхождения, пола, гендерной идентичности или религиозной принадлежности, сексуальной ориентации, заболеваний или ограниченной дееспособности.
          </Rulesp>
          <Rulesh2>демонстрирует вредные привычки, самоубийство или селфхарм</Rulesh2>
          <Rulesp>
          Блокируется контент, который демонстрирует, аргументирует, поощряет или распространяет самоубийство, самоистязание, расстройства приема пищи или злоупотребление запрещенными веществами.
          </Rulesp>
          <Rulesh2>содержит жестокие действия и насилие</Rulesh2>
          <Rulesp>
          Блокируется контент, изображающий жестокость и поощрение деятельности людей или групп, которые пропагандируют насилие. Также контент, связанный с деятельностью экстремистских организаций, террористических организаций, преступных и криминальных группировок.
          </Rulesp>
          <Rulesh2>распространяет запрещенные товары и виды деятельности</Rulesh2>
          <Rulesp style={{marginBottom: 0}}>
          Блокируются объявления о продаже и покупке алкоголя, табачных изделий, лекарственных препаратов, оружия и его комплектующих, смертоносных и токсических веществ, информация об азартных онлайн-играх и лотереях. Также советы по приобретению и инструкции по изготовлению запрещенных продуктов и любой контент, демонстрирующий и пропагандирующий опасную деятельность.
          </Rulesp>
        </Part>
      </Content>
    </MainWrapper>
  );
};
export default InstructionScreen;
