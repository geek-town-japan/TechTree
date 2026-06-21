"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"]
})

export default function LoginPage() {
  return (
    <div className="background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-6">
          <Card className="glass py-10">
            <CardHeader className="text-center pb-5">
              <CardTitle>
                <Image
                  src="./gajumaru.svg"
                  alt="ガジュマル先生"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <span className="text-4xl text-[#4BE277]">TechTree</span>
              </CardTitle>
              <CardDescription className="text-[#BCCBB9]">
                スキルを伸ばしましょう
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <FieldGroup>
                  <Field className="*:w-fit items-center">
                    <Button
                      type="submit"
                      className={`${roboto.className} bg-[#131314] hover:bg-[#424243] border-[#8E918F] text-[#E3E3E3] h-[40px] max-w-[400px] rounded-[20px] px-[12px] text-[14px] gap-0 cursor-pointer`}
                    >
                      <Image
                        src="./google-logo.svg"
                        alt="Googleロゴ"
                        width={20}
                        height={20}
                        className="mr-[12px]"
                      />
                      Googleでログイン
                    </Button>
                    <Button
                      type="submit"
                      className={`${roboto.className} bg-[#5865F2] hover:bg-[#7984F5] border-[#5865F2] text-white h-[40px] max-w-[400px] rounded-[20px] px-[12px] text-[14px] gap-0 cursor-pointer`}
                    >
                      <Image
                        src="./discord-logo.svg"
                        alt="Discordロゴ"
                        width={20}
                        height={20}
                        className="mr-[12px]"
                      />
                      Discordでログイン
                    </Button>
                    <FieldDescription className="text-[#BCCBB9]">
                      <a href="#">←新規登録</a>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
          <FieldDescription className="px-6 text-center text-[#BCCBB9]">
            <a href="#">利用規約</a>と<a href="#">プライバシーポリシー</a>
          </FieldDescription>
        </div>
      </div>
    </div>
  )
}
